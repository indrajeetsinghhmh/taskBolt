import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Manager = () => {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    isCompleted: false,
  });

  // Helper: Capitalize first letter
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // Helper: Capitalize all words
  const capitalizeWords = (str) =>
    str
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");

  // Helper: Get time difference in hours between now and due date
  const getHoursDiff = (dueDate) => {
    const now = new Date();
    const due = new Date(dueDate + "T23:59:59");
    return Math.floor((due.getTime() - now.getTime()) / (1000 * 60 * 60));
  };

  // Helpers for notification state
  const getNotifiedStates = () => {
    return JSON.parse(localStorage.getItem("notifiedStates") || "{}");
  };
  const setNotifiedStates = (obj) => {
    localStorage.setItem("notifiedStates", JSON.stringify(obj));
  };

  // Helper: Show device notification
  const showDeviceNotification = (title, body) => {
    if ("Notification" in window && Notification.permission === "granted") {
      new Notification(title, { body });
    }
  };

  // Request notification permission on mount
  useEffect(() => {
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

  // Reminder logic
  useEffect(() => {
    const interval = setInterval(() => {
      const notifiedStates = getNotifiedStates();
      let changed = false;

      tasks.forEach((task) => {
        if (task.isCompleted) return;
        const hoursLeft = getHoursDiff(task.date);
        const notifyTimes = [24, 12, 6, 3, 1];

        notifyTimes.forEach((h) => {
          const key = `${task.id}_${h}`;
          if (hoursLeft <= h && hoursLeft > h - 1 && !notifiedStates[key]) {
            const message = `⏰ "${capitalizeWords(
              task.title
            )}" is due in ${h} hour${h > 1 ? "s" : ""}!`;
            toast.info(message, { position: "top-right", autoClose: 6000 });
            showDeviceNotification("Task Reminder", message);
            notifiedStates[key] = true;
            changed = true;
          }
        });
      });

      if (changed) setNotifiedStates(notifiedStates);
    }, 60 * 1000); // every minute

    return () => clearInterval(interval);
  }, [tasks]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Save task
  const saveTask = () => {
    // Prevent saving if date is in the past
    const today = new Date().toISOString().split("T")[0];
    if (!formData.date) {
      toast.warn("Due date missing!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }
    if (formData.date < today) {
      toast.error("You cannot select a past date!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    const newTasks = [...tasks, { ...formData, id: uuidv4() }];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    toast.success("Task assigned successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    setFormData({
      title: "",
      description: "",
      date: "",
      isCompleted: false,
    });
  };

  // Mark as done
  const markAsDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    toast.success("Task completed!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((item) => item.id !== id))
    );
    toast.success("Task deleted successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Edit task
  const editTask = (id) => {
    setFormData(tasks.filter((i) => i.id === id)[0]);
    setTasks(tasks.filter((item) => item.id !== id));
  };

  // Filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "complete") return task.isCompleted === true;
    if (filter === "incomplete") return task.isCompleted === false;
    return true; // for "all"
  });

  // Load tasks from localStorage on mount
  useEffect(() => {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);

  return (
    <section className="w-full md:max-w-[80vw] mx-auto p-6 rounded-lg shadow-md mt-8">
      
      <h1 className="md:text-3xl font-bold text-slate-800 mb-6 text-center flex justify-center items-center text-xl gap-2">
        <img className="w-6" src="./favicon.png" alt="" /> Fast and fficient
        task handling
      </h1>

      <div className="flex flex-col p-4 text-black gap-8 items-center mt-4">
        <div className="flex md:flex-row w-full justify-between gap-1 md:gap-8">
          <input
            onChange={handleChange}
            value={formData.title}
            type="text"
            placeholder="Task title"
            name="title"
            id=""
            className="rounded-full border border-green-500 w-[60vw] p-4 py-1"
          />
          <input
            onChange={handleChange}
            value={formData.date}
            type="date"
            placeholder="Due date"
            name="date"
            id=""
            min={new Date().toISOString().split("T")[0]} // Prevent past dates
            className="rounded-full border border-green-500 w-[20vw] p-4 py-1"
            required
          />
        </div>
        <input
          type="text"
          onChange={handleChange}
          value={formData.description}
          placeholder="Task description"
          name="description"
          id=""
          className="rounded-full border border-green-500 p-4 py-1 w-full"
        />
        <button
          className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900 cursor-pointer"
          onClick={saveTask}
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
          ></lord-icon>
          Save
        </button>
        <div className="border border-green-600 w-full"></div>
      </div>

      {tasks.length === 0 ? (
        <h2 className="underline mt-4">No assigned task for preview</h2>
      ) : (
        <div className="flex justify-evenly mt-4">
          <div>
            <input
              type="checkbox"
              id="incomplete"
              name="filter"
              value="incomplete"
              checked={filter === "incomplete"}
              onChange={handleFilterChange}
            />
            <label htmlFor="incomplete" className="text-sm md:text-[1rem]">
              Show Incompleted
            </label>
          </div>
          <div>
            <input
              id="complete"
              name="filter"
              value="complete"
              checked={filter === "complete"}
              type="checkbox"
              onChange={handleFilterChange}
            />
            <label htmlFor="complete" className="text-sm md:text-[1rem]">
              Show Completed
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="all"
              name="filter"
              value="all"
              checked={filter === "all"}
              onChange={handleFilterChange}
            />
            <label htmlFor="all" className="text-sm md:text-[1rem]">
              Show All
            </label>
          </div>
        </div>
      )}

      <div className="container mx-auto p-4">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {filteredTasks.map((task, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid border border-green-400 rounded-lg p-4 bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h2
                className={`flex justify-between items-center mb-3 text-lg font-semibold text-green-800 ${
                  task.isCompleted ? "line-through" : ""
                }`}
              >
                {capitalizeWords(task.title)}
                <div className="flex space-x-2">
                  {task.isCompleted ? (
                    ""
                  ) : (
                    <span
                      className="cursor-pointer hover:text-green-600 transition-colors"
                      onClick={() => {
                        editTask(task.id);
                      }}
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover"
                        style={{ width: "20px", height: "20px" }}
                      ></lord-icon>
                    </span>
                  )}
                  <span
                    className="cursor-pointer hover:text-green-600 transition-colors"
                    onClick={() => {
                      deleteTask(task.id);
                    }}
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/skkahier.json"
                      trigger="hover"
                      style={{ width: "20px", height: "20px" }}
                    ></lord-icon>
                  </span>
                </div>
              </h2>
              <p
                className={`text-gray-700 mb-3 text-sm break-words ${
                  task.isCompleted ? "line-through" : ""
                }`}
              >
                {task.description}
              </p>
              <div className="flex items-center justify-between">
                <p
                  className={`text-green-700 font-medium text-xs ${
                    task.isCompleted ? "line-through" : ""
                  }`}
                >
                  Due Date - {task.date}
                </p>
                <span
                  className="cursor-pointer hover:text-green-600 transition-colors"
                  onClick={() => {
                    markAsDone(task.id);
                  }}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/hrtsficn.json"
                    trigger="hover"
                    colors="primary:#0a2e5c"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Manager;
