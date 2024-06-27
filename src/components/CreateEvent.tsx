'use client'
import { useState } from "react";
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import Button from "@/components/shared/Button";
import "@/styles/form.css";
import toast from "react-hot-toast";


const initialData = {
  actorName: "",
  actionName: "",
  email: ""
}

const validationSchema = Yup.object({
    actorName: Yup.string().min(3, "Actor name must be at least 3 characters").required("Actor name is required"),
    actionName: Yup.string().min(3, "Action name must be at least 3 characters").required("Action name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required")
})

export default function CreateEvent() {

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: typeof initialData , { resetForm }) => {
    setIsLoading(true)
    
    const fullEvent = { 
        object: "event",
        actor_name: data.actorName,
        group: "instatus.com",
        action: {
            object: "event_action",
            name: data.actionName,
        },
        target_name: data.email,
        location: "105.40.62.95",
        occurred_at: new Date().toISOString(),
        metadata: {
            redirect: "/setup",
            description: "description goes here",
        }
    }
    let res = await fetch("/api/events", { method: "POST", body: JSON.stringify(fullEvent) })
    
    if(!res.ok) {
        toast.error("Failed to create event")
    }
    else{
        const resJson = await res.json()
        if(!resJson.status) {
            toast.error(resJson.message)
        }
        toast.success("Event created successfully")
    }

    resetForm()
    setIsLoading(false)
  }

  return (
    <section className="form-layout-col max-w-3xl mx-auto p-8 mb-8 rounded-lg shadow-md bg-gray-1">
      <h3 className="text-3xl text-left font-semibold mb-6">
        Create Activity Log
      </h3>
      <Formik
        initialValues={initialData}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="actorName">Actor Name</label>
            <Field id="actorName" name="actorName" />
            <ErrorMessage name="actorName" component="p" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" />
            <ErrorMessage name="email" component="p" />
          </div>

          <div>
            <label htmlFor="actionName">Action Name</label>
            <Field id="actionName" name="actionName" />
            <ErrorMessage name="actionName" component="p" />
          </div>

          <Button title={isLoading? 'Loading...':'Submit'} isDisabled={isLoading} />
        </Form>
      </Formik>
    </section>
  );
}
