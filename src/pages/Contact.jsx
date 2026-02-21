import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Sidebar from "../components/Sidebar";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8rhrugz",
        "template_7xf7mwu",
        form.current,
        "Qu1N-rhBK3O46LfkG"
      )
      .then(() => {
        alert("Message Sent Successfully 🚀");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <div className="flex min-h-screen bg-black text-green-400">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl mb-8 tracking-widest">
          CONTACT MODULE
        </h1>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-lg space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-black border border-green-500 focus:outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-black border border-green-500 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 bg-black border border-green-500 focus:outline-none"
          />

          <button
            type="submit"
            className="border border-green-500 px-6 py-2 hover:bg-green-500 hover:text-black transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;