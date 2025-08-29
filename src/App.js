import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import AddUser from './AddUser';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* صفحة تسجيل الدخول */}
        <Route path="/" element={<Login />} />

        {/* صفحة محمية: Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* صفحة محمية: AddUser */}
        <Route
          path="/add-user"
          element={
            <ProtectedRoute>
              <AddUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
