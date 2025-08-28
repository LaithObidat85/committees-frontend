import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "./api";
import { showSuccess, showError } from "./toastHelper"; // ✅

function Dashboard() {
  const navigate = useNavigate();

  
const handleLogout = async () => {
  try {
    await api.post("/api/logout");
    showSuccess("✅ تم تسجيل الخروج");

    // ⏳ انتظر ثانية ونصف قبل الانتقال
    setTimeout(() => {
      navigate("/");
    }, 1500);
  } catch (err) {
    console.error(err);
    showError("❌ حدث خطأ أثناء تسجيل الخروج");
  }
};




  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 مرحبًا بك في لوحة التحكم</h1>
      <p>لقد قمت بتسجيل الدخول بنجاح.</p>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        🚪 تسجيل الخروج
      </button>

      <ToastContainer />
    </div>
  );
}

export default Dashboard;
