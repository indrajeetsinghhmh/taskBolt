import React from 'react'

const About = () => {
	return (
    <section className="w-full md:max-w-[80vw] mx-auto p-6 rounded-lg shadow-md mt-8">
      <h1 className="md:text-3xl font-bold text-slate-800 mb-6 text-center flex justify-center items-center text-xl gap-2">
        <img className="w-6" src="./favicon.png" alt="" /> About TaskBolt
      </h1>
      <p className="text-green-700 mb-6 text-lg text-center">
        <span className="font-semibold">TaskBolt</span> is a powerful and
        intuitive task management application designed to help you efficiently{" "}
        <span className="font-semibold">
          track, manage, and organize your tasks
        </span>
        . Whether you need to add, edit, or delete tasks, TaskBolt provides a
        seamless experience across all your devices.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        Key Features
      </h2>
      <ul className="list-disc list-inside text-green-800 mb-6 space-y-1">
        <li>
          <span className="font-medium">Add, Edit, and Delete Tasks:</span>{" "}
          Manage your to-do list with a user-friendly interface.
        </li>
        <li>
          <span className="font-medium">Filter Tasks:</span> View tasks by{" "}
          <span className="italic">Completed</span>,{" "}
          <span className="italic">Incompleted</span>, or{" "}
          <span className="italic">All</span> status.
        </li>
        <li>
          <span className="font-medium">Persistent Storage:</span> Tasks are
          saved in your browser’s{" "}
          <span className="font-semibold">local storage</span> for data
          persistence.
        </li>
        <li>
          <span className="font-medium">Due Date Assignment:</span> Assign due
          dates to keep deadlines in check.
        </li>
        <li>
          <span className="font-medium">Reminders:</span> Get notified about
          upcoming tasks with built-in reminders.
        </li>
        <li>
          <span className="font-medium">Fully Responsive:</span> Enjoy a smooth
          experience on any device or screen size.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        About the Developer
      </h2>
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0">
          {/* Placeholder for developer's avatar */}
          <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700">
            W
          </div>
        </div>
        <div>
          <p className="font-semibold text-green-800">
            Inderjeet Singh (Winny X)
          </p>
          <p className="text-green-700 text-sm">
            Full Stack Developer | MERN Stack Expert
          </p>
        </div>
      </div>
      <p className="text-green-700 mb-2">
        This project was created as part of learning React from <span className="font-semibold">CodeWithHarry</span> Channel.
      </p>
      <div className="mt-6 text-center">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium">
          Stay organized, meet your deadlines, and boost your productivity with
          TaskBolt!
        </span>
      </div>
    </section>
  );
}

export default About