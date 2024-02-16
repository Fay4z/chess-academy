import React, { useState } from "react";
import { FaHome, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const DEFAULT_FORM_VALUE = {
    name: "",
    email: "",
    phone: "",
    details: "",
  };

  const [formVal, setFormVal] = useState(DEFAULT_FORM_VALUE);
  const [emailStatus, setEmailStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal({
      ...formVal,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formVal);

    try {
      // const response = await axios.post(`${import.meta.env.VITE_META_URL}/formData`, formVal);
      const response = await axios.post(
        `http://localhost:8000/formData`,
        formVal
      );
      console.log("Form data sent:", response.data);
      setEmailStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setEmailStatus("error");
    } finally {
      setFormVal(DEFAULT_FORM_VALUE);
    }
  };
  return (
    <>
      <section className=" px-10 md:px-20 relative z-10 overflow-hidden py-20 lg:py-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <ContactDetails />
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label>
                      <div className="text-lg">Name:</div>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                        value={formVal.name}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label>
                      <div className="text-lg">Email:</div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                        value={formVal.email}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label>
                      <div className="text-lg">Phone:</div>
                      <input
                        type="number"
                        name="phone"
                        required
                        className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                        value={formVal.phone}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div className="mb-4">
                    <label>
                      <div className="text-lg">Details:</div>
                      <textarea
                        name="details"
                        required
                        className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
                        value={formVal.details}
                        onChange={handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-accent p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-gradient-to-r from-violet-200 to-indigo-200 p-5 text-xl font-semibold -mx-10 text-center">
        <EmailMsg emailStatus={emailStatus} />
      </div>
    </>
  );
};

export default Contact;

const EmailMsg = ({ emailStatus }) => {
  return (
    <div>
      {emailStatus === "success" && <div> Email sent successfully</div>}
      {emailStatus === "error" && <div> Error while sending the Email</div>}
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
      <div className="mb-12 max-w-[570px] lg:mb-0">
        <h2 className="mb-6 text-3xl font-bold uppercase text-dark sm:text-4xl">
          GET IN TOUCH WITH US
        </h2>
        <p className="mb-9 leading-relaxed text-lg">
          Whether you're seeking for Chess program details or guidance, our team
          is just a call away for any assistance you need
        </p>

        <div className="flex flex-col flex-wrap space-y-6  text-base md:text-lg">
          <div className="flex items-center">
            <div className="mr-6">
              <FaHome className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            <div>
              <p>Maharaja Nagar Extn.,</p>
              <p>Srinivasa Nagar ,PalayamKottai,</p>
              <p>Tirunelveli</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-6">
              <FaPhoneAlt className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            <p>+91 7092773865</p>
          </div>

          <div className="flex items-center">
            <div className="mr-6">
              <FaEnvelope className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            <p>jsabbasali@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
