import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_42raz2b", // Your Service ID
        "template_04h133i", // Your Template ID
        form.current,
        "fMnJo6B6f94On-xcx" // Your Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />
      <div className="contact-header">
        <h2 className="contact-title">CONTACT</h2>
        <div className="contact-underline"></div>
        <p className="contact-subtitle">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      <div className="contact-card">
        <h3 className="contact-card-title">
          Connect With Me <span>🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="email" name="user_email" placeholder="Your Email" required className="form-input" />
          <input type="text" name="user_name" placeholder="Your Name" required className="form-input" />
          <input type="text" name="subject" placeholder="Subject" required className="form-input" />
          <textarea name="message" placeholder="Message" rows="4" required className="form-input"></textarea>
          <button type="submit" className="form-button">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
