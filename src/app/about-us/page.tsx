import React from "react";

export default function page() {
  return (
    <main className="w-full max-w-4xl m-auto">
        <h1 className="text-4xl text-center font-bold my-6 text-teal-800">
          About Us
        </h1>
      <section className="flex flex-col min-h-96 p-8 rounded-lg bg-gray-1 shadow-md">
        <p className="w-full font-bold text-xl mb-6">
            Instatus Activity Logs
        </p>
        <p className="w-full font-medium mb-6">
          At Instatus Activity Logs, our mission is to provide an efficient and
          intuitive way to track and monitor user activities across various
          platforms. Our goal is to help businesses and individuals maintain a
          secure and transparent record of all activities, ensuring
          accountability and ease of auditing.
        </p>

        <p className="w-full font-medium mb-6">
          Our team is composed of passionate developers, designers, and security
          experts dedicated to building a robust and user-friendly activity
          logging solution. We work tirelessly to improve our product and
          deliver the best experience to our users.
        </p>
      </section>
    </main>
  );
}
