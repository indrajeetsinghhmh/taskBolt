import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <section className="w-full md:max-w-[80vw] mx-auto p-6 rounded-lg shadow-md mt-8 ">
      <h1 className="md:text-3xl font-bold text-slate-800 mb-6 text-center flex justify-center items-center text-xl gap-2">
        <img className="w-6" src="./favicon.png" alt="" /> TaskBolt Terms of
        Service
      </h1>

      <div className="flex flex-col p-4 text-black gap-6 items-center mt-4">
        <div className="w-full md:w-3/4">
          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Acceptance of Terms
          </h3>
          <p className="text-gray-700 text-base mb-4">
            By using TaskBolt, you agree to comply with and be bound by these
            Terms of Service. If you do not agree, please do not use the
            application.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Use of the Service
          </h3>
          <p className="text-gray-700 text-base mb-4">
            TaskBolt is provided to help you manage your tasks efficiently. You
            agree to use the app only for lawful purposes and in accordance with
            these terms.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            User Data
          </h3>
          <p className="text-gray-700 text-base mb-4">
            All task data is stored locally in your browser. We do not collect
            or store your personal data on our servers.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Limitation of Liability
          </h3>
          <p className="text-gray-700 text-base mb-4">
            TaskBolt is provided "as is" without warranties of any kind. We are
            not liable for any damages arising from the use or inability to use
            the service.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Changes to Terms
          </h3>
          <p className="text-gray-700 text-base mb-4">
            We reserve the right to update or modify these Terms of Service at
            any time. Changes will be posted within the app, and continued use
            constitutes acceptance.
          </p>

          <h3 className="text-green-700 text-xl font-semibold mb-2">
            Contact Information
          </h3>
          <p className="text-gray-700 text-base mb-4">
            For any questions about these terms, please contact us at{" "}
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

export default TermsOfService;
