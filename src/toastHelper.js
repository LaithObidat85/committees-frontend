// src/toastHelper.js
import { toast } from "react-toastify";

// ✅ نجاح
export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    autoClose: 3000,
    className: "bg-success text-white",
  });
};

// ❌ خطأ
export const showError = (message) => {
  toast.error(message, {
    position: "top-center",
    autoClose: 3000,
    className: "bg-danger text-white",
  });
};

// ℹ️ معلومة
export const showInfo = (message) => {
  toast.info(message, {
    position: "top-center",
    autoClose: 3000,
    className: "bg-info text-white",
  });
};

// ⚠️ تحذير
export const showWarning = (message) => {
  toast.warn(message, {
    position: "top-center",
    autoClose: 3000,
    className: "bg-warning text-dark",
  });
};
