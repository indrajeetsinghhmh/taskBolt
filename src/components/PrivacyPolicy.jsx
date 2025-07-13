import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <section className="w-full md:max-w-[80vw] mx-auto p-6 rounded-lg shadow-md mt-8 ">
      <h1 className="md:text-3xl font-bold text-slate-800 mb-6 text-center flex justify-center items-center text-xl gap-2">
        <img className="w-6" src="./favicon.png" alt="" /> TaskBolt Privacy Policy
      </h1>

      <div className="flex flex-col p-4 text-black gap-6 items-center mt-4">
        <div className="w-full md:w-3/4">
          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Introduction
          </h3>
          <p className="text-gray-700 text-base mb-4">
            Welcome to <span className="font-semibold">TaskBolt</span>! Your
            privacy is important to us. This Privacy Policy explains how we
            collect, use, and protect your information when you use our task
            management application.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Information We Collect
          </h3>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>
              <span className="font-semibold">Local Data:</span> All your tasks
              and preferences are stored locally in your browser. We do not
              collect or store your data on any external servers.
            </li>
            <li>
              <span className="font-semibold">Notifications:</span> If you
              enable reminders, TaskBolt may request permission to send you
              notifications about your upcoming tasks.
            </li>
          </ul>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            How We Use Your Information
          </h3>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>To help you manage your tasks efficiently.</li>
            <li>
              To remind you of upcoming deadlines via notifications (if
              enabled).
            </li>
            <li>
              To improve your experience by saving your task data in your
              browser.
            </li>
          </ul>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Data Security
          </h3>
          <p className="text-gray-700 text-base mb-4">
            Your data is stored securely in your browser’s local storage. We do
            not transmit your data over the internet or share it with third
            parties.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Your Choices
          </h3>
          <ul className="list-disc ml-6 text-gray-700 mb-4">
            <li>
              You can delete your tasks or clear your browser data at any time.
            </li>
            <li>You can disable notifications in your browser settings.</li>
          </ul>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Changes to This Policy
          </h3>
          <p className="text-gray-700 text-base mb-4">
            We may update this Privacy Policy from time to time. Any changes
            will be posted within the app.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Contact Us
          </h3>
          <p className="text-gray-700 text-base mb-4">
            If you have any questions about this Privacy Policy or your data,
            please contact us at{" "}
            <a
              href="mailto:support@taskbolt.app"
              className="text-green-700 underline"
            >
              <Link to="/contact" className="hover:underline">
                support@taskbolt.app
              </Link>
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
