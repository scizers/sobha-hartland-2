"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import CustomPhoneInput from "./ui/CustomPhoneField";
import { submitLead, validateEmail, validatePhone } from "../lib/utils";
import Dropdown from "./ui/Dropdown";

export default function ContactForm({
  onClose,
  btnGold = false,
  btnText = "Get a Call Back!",
  bgColor = "white",
}) {
  const router = useRouter();
  const initState = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initState);
  const [formErrors, setFormErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const titleOptions = ["Mr.", "Mrs.", "Ms."];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePhoneChange = (phone, countryData) => {
    setFormData((prev) => ({
      ...prev,
      phone,
      countryCodeISO: countryData?.countryCode?.toUpperCase() || "AE",
      countryName: countryData?.name || "United Arab Emirates",
    }));
    if (formErrors.phone) setFormErrors((prev) => ({ ...prev, phone: "" }));
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";

    const emailError = validateEmail(formData.email);
    if (emailError) errors.email = emailError;

    const phoneError = validatePhone(formData.phone, formData.countryCodeISO);
    if (phoneError) errors.phone = phoneError;

    setFormErrors(errors);
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const errors = validate();
    if (Object.keys(errors).length > 0) return;

    setLoading(true);
    try {
      const leadData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        mobile: formData.phone,
        comments: formData.comments,
        countryName: formData.countryName,
      };

      const response = await submitLead(leadData);

      if (response?.success || response?.status === "success") {
        setFormData(initState);
        if (onClose) onClose();

        // ✅ Redirect to Thank You page
        router.push("/thank-you");
      } else {
        setErrorMessage(
          response?.msg || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-8 rounded-lg"
      noValidate
    >
      <Dropdown
        options={titleOptions}
        value={formData.title}
        onChange={(value) => {
          setFormData((prev) => ({ ...prev, title: value }));
          if (formErrors.title)
            setFormErrors((prev) => ({ ...prev, title: "" }));
        }}
        placeholder="Title"
        error={formErrors.title}
      />

      <Input
        name="firstName"
        placeholder="First Name *"
        value={formData.firstName}
        onChange={handleChange}
        error={formErrors.firstName}
      />

      <Input
        name="lastName"
        placeholder="Last Name *"
        value={formData.lastName}
        onChange={handleChange}
        error={formErrors.lastName}
      />

      <Input
        name="email"
        type="email"
        placeholder="Email *"
        value={formData.email}
        onChange={handleChange}
        error={formErrors.email}
      />

      <CustomPhoneInput
        value={formData.phone}
        onChange={handlePhoneChange}
        placeholder="Phone *"
        error={formErrors.phone}
        bgColor={bgColor}
      />

      <Textarea
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
        className="bg-transparent"
      />

      {errorMessage && (
        <p className="text-red-500 text-xs text-center">{errorMessage}</p>
      )}

      <Button
        type="submit"
        disabled={loading}
        variant={btnGold ? "gold" : "green"}
        className="flex items-center justify-center gap-2 !rounded-none w-full !mt-8"
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span className="text-white">Submitting...</span>
          </>
        ) : (
          btnText
        )}
      </Button>
    </form>
  );
}
