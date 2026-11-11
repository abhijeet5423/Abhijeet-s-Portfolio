import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaClock,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateField = (name, value) => {
    switch (name) {
      case "user_name":
        if (!value.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "user_email":
        if (!value.trim()) return "Please enter your email address.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email address.";
        }
        return "";
      case "subject":
        if (!value.trim()) return "Please enter a subject.";
        return "";
      case "message":
        if (!value.trim()) return "Please enter your message.";
        if (value.trim().length < 10) return "Message must be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const sendEmail = (event) => {
    event.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstInvalidField = Object.keys(newErrors)[0];
      const el = formRef.current?.elements[firstInvalidField];
      if (el) el.focus();
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_42raz2b",
        "template_04h133i",
        formRef.current,
        "fMnJo6B6f94On-xcx"
      )
      .then(
        () => {
          setIsSent(true);
          setIsSubmitting(false);
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          formRef.current.reset();
          toast.success("Message sent successfully! I will reply soon.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message via EmailJS:", error);
          setIsSubmitting(false);
          setErrorMessage(
            "Unable to deliver your message right now. Please try again or reach out directly at abhijeetshukla3010@gmail.com."
          );
          toast.error("Failed to send message. Please try again or email directly.", {
            position: "top-right",
            autoClose: 4000,
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
    <section id="contact" className="section contact-section" aria-label="Contact Section">
      <ToastContainer />
      <div className="contact-layout">
        {/* Left Column: Direct Info & Communication Channels */}
        <div className="contact-info-col reveal-on-scroll">
          <div className="section-heading contact-heading">
            <p className="section-kicker">05 / CONTACT</p>
            <h2>Have a project or opportunity in mind?</h2>
            <p>
              I&apos;m open to discussing development opportunities, collaborations and
              interesting projects.
            </p>
          </div>

          <div className="contact-channels-list">
            <a
              href="mailto:abhijeetshukla3010@gmail.com"
              className="contact-channel-item"
              aria-label="Send direct email to abhijeetshukla3010@gmail.com"
            >
              <div className="channel-icon" aria-hidden="true">
                <FaEnvelope />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Direct Email</span>
                <span className="channel-value">abhijeetshukla3010@gmail.com</span>
              </div>
            </a>

            <div className="contact-channel-item">
              <div className="channel-icon" aria-hidden="true">
                <FaMapMarkerAlt />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Location</span>
                <span className="channel-value">
                  Greater Noida / Delhi NCR &bull; Open to Remote
                </span>
              </div>
            </div>

            <div className="contact-channel-item">
              <div className="channel-icon" aria-hidden="true">
                <FaClock />
              </div>
              <div className="channel-meta">
                <span className="channel-label">Availability</span>
                <span className="channel-value">
                  Typically responds within 24 hours
                </span>
              </div>
            </div>
          </div>

          <div className="contact-social-row">
            <span className="social-row-label">Connect on:</span>
            <div className="social-row-links">
              <a
                href="https://github.com/abhijeet5423"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub Profile"
              >
                <FaGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abhijeetshukla2011"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Refined Professional Contact Form */}
        <div className="contact-card reveal-on-scroll stagger-1">
          <div className="contact-card-header">
            <h3>Send a Message</h3>
            <p>
              Fill out the details below. All fields marked with an asterisk are required.
            </p>
          </div>

          {isSent && (
            <div className="form-status-banner status-success" role="status">
              <span className="status-indicator-dot" aria-hidden="true"></span>
              <span>Your message has been sent successfully. I will get back to you shortly.</span>
            </div>
          )}

          {errorMessage && (
            <div className="form-status-banner status-error" role="alert">
              <span>{errorMessage}</span>
            </div>
          )}

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form"
            noValidate
            aria-label="Contact Message Form"
          >
            <div className="form-group">
              <label htmlFor="user_name" className="form-label">
                Your Name <span className="required-star" aria-hidden="true">*</span>
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Abhijeet Shukla"
                autoComplete="name"
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.user_name}
                aria-describedby={errors.user_name ? "user_name_error" : undefined}
                className={`form-input ${errors.user_name ? "input-error" : ""}`}
              />
              {errors.user_name && (
                <span id="user_name_error" className="field-error-msg" role="alert">
                  {errors.user_name}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="user_email" className="form-label">
                Your Email <span className="required-star" aria-hidden="true">*</span>
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="name@example.com"
                autoComplete="email"
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.user_email}
                aria-describedby={errors.user_email ? "user_email_error" : undefined}
                className={`form-input ${errors.user_email ? "input-error" : ""}`}
              />
              {errors.user_email && (
                <span id="user_email_error" className="field-error-msg" role="alert">
                  {errors.user_email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject <span className="required-star" aria-hidden="true">*</span>
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Project discussion, opportunity, or inquiry"
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject_error" : undefined}
                className={`form-input ${errors.subject ? "input-error" : ""}`}
              />
              {errors.subject && (
                <span id="subject_error" className="field-error-msg" role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required-star" aria-hidden="true">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Please describe what you would like to discuss or collaborate on..."
                rows={5}
                required
                disabled={isSubmitting}
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message_error" : undefined}
                className={`form-input ${errors.message ? "input-error" : ""}`}
              />
              {errors.message && (
                <span id="message_error" className="field-error-msg" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="primary-action form-submit-btn"
              disabled={isSubmitting}
              aria-label={isSubmitting ? "Sending message" : "Send message"}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-indicator" aria-hidden="true"></span>
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane aria-hidden="true" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
