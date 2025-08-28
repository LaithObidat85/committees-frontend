import React from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";   // ✅ استدعاء instance الجاهز

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/api/logout");   // ✅ رابط نسبي فقط
      alert("✅ تم تسجيل الخروج");
      navigate("/"); // الرجوع لصفحة تسجيل الدخول
    } catch (err) {
      console.error(err);
      alert("❌ حدث خطأ أثناء تسجيل الخروج");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎉 مرحبًا بك في لوحة التحكم</h1>
      <p>لقد قمت بتسجيل الدخول بنجاح.</p>
      <button onClick={handleLogout} className="btn btn-danger mt-3">
        🚪 تسجيل الخروج
      </button>
    </div>
  );
}

export default Dashboard;
