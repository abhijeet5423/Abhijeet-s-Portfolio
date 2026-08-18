import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_42raz2b",
        "template_04h133i",
        form.current,
        "fMnJo6B6f94On-xcx"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
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
    <section id="contact" className="section contact-section">
      <ToastContainer />
      <div className="contact-layout">
        <div className="section-heading contact-heading">
          <p className="section-kicker">05 / CONTACT</p>
          <h2>Let us turn a useful idea into a working product.</h2>
          <p>
            Reach out for web development opportunities, product builds, internships,
            collaborations, or questions.
          </p>
          {isSent && <span className="sent-status">Last message sent successfully.</span>}
        </div>

        <div className="contact-card">
          <div className="panel-heading">
            <span className="mono-label">message.compose</span>
            <h3>Connect With Me</h3>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label>
              <span>Your Email</span>
              <input type="email" name="user_email" placeholder="you@example.com" required className="form-input" />
            </label>
            <label>
              <span>Your Name</span>
              <input type="text" name="user_name" placeholder="Your name" required className="form-input" />
            </label>
            <label>
              <span>Subject</span>
              <input type="text" name="subject" placeholder="Project, role, or collaboration" required className="form-input" />
            </label>
            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Tell me what you want to build..." rows="5" required className="form-input"></textarea>
            </label>
            <button type="submit" className="form-button">
              <FaPaperPlane aria-hidden="true" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
