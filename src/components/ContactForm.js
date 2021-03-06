import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./ContactForm.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const { register, errors, handleSubmit, reset } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    // Send form email
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section id="contact">
      <div className="titleC">
        <h1 data-aos="slide-right" data-aos-once="true">
          Contact
        </h1>
        <div
          className="h1__underline"
          data-aos="fade"
          data-aos-once="true"
        ></div>
        <div
          className="ContactForm"
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-easing="ease-in-out-back"
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    {/* Row 1 of form */}
                    <div className="row formRow">
                      <div className="col-6">
                        <input
                          style={{
                            width: "60vw",
                            backgroundColor: "#1C2127",
                            border: "none",
                            borderRadius: "4px",
                            padding: "1vw",
                            height: "22px",
                            marginTop: "2vw",
                            color: "white",
                            outline: "none",
                          }}
                          type="text"
                          name="name"
                          ref={register({
                            required: {
                              value: true,
                              message: "Please enter your name",
                            },
                            maxLength: {
                              value: 30,
                              message: "Please use 30 characters or less",
                            },
                          })}
                          className="form-control formInput"
                          placeholder="Name"
                        ></input>
                        {errors.name && (
                          <span className="errorMessage">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <input
                          style={{
                            width: "60vw",
                            backgroundColor: "#1C2127",
                            border: "none",
                            borderRadius: "4px",
                            padding: "1vw",
                            height: "22px",
                            marginTop: "0.2vw",
                            color: "white",
                            outline: "none",
                          }}
                          type="email"
                          name="email"
                          ref={register({
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          })}
                          className="form-control formInput"
                          placeholder="Email address"
                        ></input>
                        {errors.email && (
                          <span className="errorMessage">
                            Please enter a valid email address
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className="row formRow">
                      <div className="col">
                        <input
                          style={{
                            width: "60vw",
                            backgroundColor: "#1C2127",
                            border: "none",
                            borderRadius: "4px",
                            padding: "1vw",
                            height: "22px",
                            marginTop: "0.2vw",
                            color: "white",
                            outline: "none",
                          }}
                          type="text"
                          name="subject"
                          ref={register({
                            required: {
                              value: true,
                              message: "Please enter a subject",
                            },
                            maxLength: {
                              value: 75,
                              message: "Subject cannot exceed 75 characters",
                            },
                          })}
                          className="form-control formInput"
                          placeholder="Subject"
                        ></input>
                        {errors.subject && (
                          <span className="errorMessage">
                            {errors.subject.message}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row 3 of form */}
                    <div className="row formRow">
                      <div className="col">
                        <textarea
                          style={{
                            width: "60vw",
                            backgroundColor: "#1C2127",
                            border: "none",
                            borderRadius: "4px",
                            padding: "1vw",
                            height: "12vw",
                            marginTop: "0.2vw",
                            color: "white",
                            outline: "none",
                          }}
                          rows={3}
                          name="message"
                          ref={register({
                            required: true,
                          })}
                          className="form-control formInput"
                          placeholder="Message"
                        ></textarea>
                        {errors.message && (
                          <span className="errorMessage">
                            Please enter a message
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      className="submit-btn"
                      type="submit"
                      style={{
                        left: "20%",
                      }}
                    >
                      SUBMIT
                    </button>
                  </form>
                </div>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
