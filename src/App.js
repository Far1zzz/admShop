import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "antd/dist/reset.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import InfoData from "./pages/InfoData";
import FormData from "./pages/formData";

// logic private route agar hanya bisa masuk ketika token terdeteksi di localStorage
function Private({ children }) {
  // ambil data token di localStorage
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default function router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <Private>
              <Home />
            </Private>
          }
        />
        <Route path="/info" element={<InfoData />} />
        <Route path="/inputData" element={<FormData />} />
        <Route path="/edit/:idToko" element={<FormData />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}
