import React, { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    hasPet: false,
    petName: "",
    petType: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    petName: "",
    petType: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateStep1 = () => {
    const { fullName, email } = formData;
    let isValid = true;
    let newErrors = {};

    if (!fullName) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    const { petName, petType } = formData;
    let isValid = true;
    let newErrors = {};

    if (formData.hasPet) {
      if (!petName) {
        newErrors.petName = "Pet Name is required";
        isValid = false;
      }

      if (!petType) {
        newErrors.petType = "Pet Type is required";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  return <div></div>;
}

export default MultiStepForm;
