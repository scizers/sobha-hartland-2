"use client";

import { useEffect } from "react";
import ContactForm from "./ContactForm";

const ApplyForm = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section
      className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center"
      id="applyForm"
    >
      <div className="relative w-[95%] lg:w-[90%] lg:max-w-3xl px-3 py-8 lg:px-6 lg:pt-10 lg:pb-3 bg-white shadow-xl">
        <button
          onClick={onClose}
          className="absolute text-[23px] right-0 top-0 text-black hover:text-gray-800 cursor-pointer bg-[#cccccc]"
        >
          <span className="p-2"> ✕</span>
        </button>
        <h2 className="h3 !tracking-tighter text-center font-semibold">
          REGISTER YOUR INTEREST
        </h2>
        <div className="w-[90%] lg:w-[60%] mx-auto">
          <ContactForm
            onClose={onClose}
            bgColor="white"
            btnGold={true}
            btnText="Enquire Now"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplyForm;
