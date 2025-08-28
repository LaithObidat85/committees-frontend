import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "./api";
import { showSuccess, showError } from "./toastHelper"; // ✅ استخدام الدوال الموحدة

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/api/login", { email, password });
      showSuccess(res.data.message || "✅ تم تسجيل الدخول بنجاح");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      console.error(err);
      showError("❌ فشل تسجيل الدخول");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>تسجيل الدخول</h2>
      <input 
        type="email" 
        placeholder="البريد الإلكتروني" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="form-control mb-2"
      />
      <input 
        type="password" 
        placeholder="كلمة المرور" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="form-control mb-2"
      />
      <button onClick={handleLogin} className="btn btn-primary w-100">
        دخول
      </button>

      <ToastContainer />
    </div>
  );
}

export default Login;
