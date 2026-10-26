
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Sale from "./pages/Sale";
import Services from "./pages/Services";
import Rental from "./pages/Rental";
import Pieces from "./pages/Pieces";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Sale />} />
      <Route path="/services" element={<Services />} />
      <Route path="/rental" element={<Rental />} />
      <Route path="/pieces" element={<Pieces />} />
      <Route path="/contact" element={<Contact />} />


    </Routes>
  );
}
