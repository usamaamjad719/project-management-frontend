// src/components/ToastNotification.jsx
import React from "react";
import { toast, ToastContainer } from "react-toastify";

// Generic Toast Notification Component
const ToastNotification = () => {
  return <ToastContainer position="bottom-right" />;
};

// Utility functions for showing toasts
export const showSuccessToast = (message) => {
  toast.success(message, { position: "bottom-right" });
};

export const showErrorToast = (message) => {
  toast.error(message, { position: "bottom-right" });
};

export default ToastNotification;
