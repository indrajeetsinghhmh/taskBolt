import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycby_Xg7avfPdmyy5c3SaYXI57v4G4YRnbBHX2gqcbIqBV63q-Yn73xLfkBHg-Gk9s-DJ/exec";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Subject=${e.target.subject.value}&Message=${e.target.message.value}`,
    })
      .then((res) => res.text())
      .catch((err) => console.log(err));

    setSubmitted(true);
  };

  return (
    <section className="w-full md:max-w-[80vw] mx-auto p-6 rounded-lg shadow-md mt-8">
      <h1 className="md:text-3xl font-bold text-slate-800 mb-6 text-center flex justify-center items-center text-xl gap-2">
        <img className="w-6" src="./favicon.png" alt="" /> Contact TaskBolt
      </h1>

      <p className="text-green-700 mb-6 text-lg text-center">
        Have questions, feedback, or need support? We'd love to hear from you!
        Please fill out the form below and we'll get back to you as soon as
        possible.
      </p>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-semibold text-green-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-semibold text-green-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-1 font-semibold text-green-800"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject of your message"
              className="w-full px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-semibold text-green-800"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
            />
          </div>

          <div className="text-center flex justify-center">
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-300 text-white rounded-full px-8 py-2 w-fit border border-green-900 cursor-pointer flex items-center gap-2"
            >
              <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
                colors="primary:#ffffff,secondary:#7166ee"
                trigger="hover"
              ></lord-icon>
              Send Message
            </button>
          </div>
        </form>
      ) : (
        <div className="max-w-xl mx-auto text-center p-6 bg-green-100 rounded-md">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Thank you for reaching out!
          </h2>
          <p className="text-green-700">
            We have received your message and will get back to you shortly.
          </p>
          <button
            onClick={() => {
              setFormData({ name: "", email: "", subject: "", message: "" });
              setSubmitted(false);
            }}
            className="mt-4 bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full font-medium hover:bg-blue-200 transition-colors"
          >
            Send Another Message
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;
