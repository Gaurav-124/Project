import Home from "./components/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Reports from "./components/Reports";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import ForgotPwd from "./components/auth/ForgotPwd";
import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./components/auth/PrivateRoute";
import EditProfile from "./components/auth/EditProfile";

function App() {
  return (
    <AuthProvider>
      <div className="">
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<PrivateRoute>
              <Reports />
            </PrivateRoute>}/>
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />
            <Route path="/editProfile" element={<PrivateRoute>
              <EditProfile />
            </PrivateRoute>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/forgotPassword" element={<ForgotPwd />} />
          </Routes>
        </HashRouter>
        <div id="modal-root"></div>
      </div>
    </AuthProvider>
    
  );
}

export default App;