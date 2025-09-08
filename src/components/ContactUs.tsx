import React, { useState } from "react";
import assets from "../assets/assets";
import Title from "./Title";
import toast from "react-hot-toast";
import { motion } from "motion/react";
const ContactUs = () => {
  const [result, setResult] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(true);
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "137441f5-dada-4c4f-8363-ac37c02d490f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for submission");
      setResult(false);
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(false);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        <div>
          <p className="mb-2 text-sm font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="icon" />
            <input
              required
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium">Email id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="icon" />
            <input
              required
              type="email"
              placeholder="Enter Email id"
              className="w-full p-3 text-sm outline-none"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <p className="mb-2 font-medium text-sm">Message</p>
          <textarea
            rows={8}
            name="message"
            required
            placeholder="Enter Your message"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-800"
          />
        </div>

        <button
          type="submit"
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          {result ? (
            "Loading..."
          ) : (
            <>
              Submit <img src={assets.arrow_icon} alt="icon" className="w-4" />
            </>
          )}
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
