import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from './api';
import { showSuccess, showError } from './toastHelper'; // ✅

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = async () => {
    try {
      const res = await api.post('/api/users', { name, email, password });
      showSuccess(res.data.message || '✅ تم إضافة المستخدم الان بنجاح');
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      showError('❌ فشل في إضافة المستخدم');
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2>➕ إضافة مستخدم جديد</h2>
      <input
        type="text"
        placeholder="الاسم"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control mb-2"
      />
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
      <button onClick={handleAddUser} className="btn btn-success w-100">
        إضافة
      </button>

      <ToastContainer />
    </div>
  );
}

export default AddUser;
