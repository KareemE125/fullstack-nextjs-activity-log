import ActivityTable from "@/components/activity-table/ActivityTable";

export default function ActivityPage() {
  return (
    <main>
      <h1 className="text-4xl text-center font-bold text-teal-800 my-6 ">
        Instatus Activity Logs
      </h1>
      <ActivityTable />
    </main>
  )
}