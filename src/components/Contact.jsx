import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";
const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const handleCloseClick = () => {
    setShowMessage(false);
  };

  const handleShowClick = () => {
    setShowMessage(true);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xi1nuid",
        "template_y0no0de",
        form.current,
        "BtstpjtWBfFiXnBpC"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleShowClick();
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, Please try again");
        }
      );
  };

  return (
    <div>
      <div className="container mx-auto mb-10" id="contact">
        <div className="div"></div>
        <div>
          <h1 className="font-bold text-3xl text-center mt-6 color">Contact</h1>
          <div className="lg:w-[60%] mx-auto p-4 bg-white rounded shadow">
            <form onSubmit={sendEmail} ref={form} className="mb-10">
              <div className="mb-4">
                <label htmlFor="Name" className="block mb-1 font-medium font">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 bord focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Email" className="block mb-1 font-medium font">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 bord  focus:outline-none"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-medium font">Message</label>
                <textarea
                  name="message"
                  className="w-full px-4 py-2 bord  focus:outline-none"
                  rows="4"
                  required
                />
              </div>
              <button
                type="submit"
                value="Send"
                className="w-full font bg-black/90 text-white py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-300">
                Submit
              </button>
            </form>
            {showMessage && (
              <div className="animate-pop-in fixed inset-0 flex items-center justify-center z-10 bg-opacity-50 bg-gray-900">
                <div className="bg-white p-6 rounded shadow-md">
                  <p className="text-xl font-semibold mb-3">Message Sent!</p>
                  <p>Your message has been successfully sent.</p>
                  <button
                    onClick={handleCloseClick}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
