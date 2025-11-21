import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";
import { parsePhoneNumberFromString } from "libphonenumber-js";
export const apiUrl = "https://api.realedge.ai";
// export const apiUrl = "https://devapi.realedgetech.com";

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

export async function submitLead(leadData) {
  try {
    const payload = {
      name: leadData.name,
      email: leadData.email,
      mobile: leadData.mobile,
      note: leadData.comments,
      leadSource: "Facebook Marketing",
      reference: "",
      countryName: leadData.countryName || "United Arab Emirates",
      pipelineName: "Off Plan Sales",
      campaignName: "Sobha Hartland 2 ",
      secret: "7SpPpnDU",
      // secret: "qsL2He06",
    };

    const response = await axios.post(`${apiUrl}/lead/addWebhooks`, payload, {
      headers: {
        "Content-Type": "application/json",
      },
      maxBodyLength: Infinity,
    });
    console.log("payload payload:", payload);
    return response.data;
  } catch (error) {
    console.error("Lead submission error:", error);
    throw error;
  }
}

export const validatePhone = (phone, countryCode = "AE") => {
  if (!phone || phone.trim() === "") {
    return "Phone number is required.";
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(phone, countryCode);
    if (!phoneNumber || !phoneNumber.isValid()) {
      return "Please enter a valid phone number.";
    }
  } catch {
    return "Please enter a valid phone number.";
  }

  return undefined;
};

export const validateEmail = (email, isRequired = true) => {
  if ((!email || email.trim() === "") && isRequired) {
    return "Email is Required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email && !emailRegex.test(email)) {
    return "Please enter a valid email address.";
  }

  return "";
};
