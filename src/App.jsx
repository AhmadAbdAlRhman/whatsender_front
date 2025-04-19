import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index1 from "./Frontend/HomePage/Index1"
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ResetPass from "./components/login/ResetPass";
import ResetPassaftersendemail from "./components/login/ResetPassaftersendemail";
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resetpassword" element={<ResetPass />} />
        <Route path="/ResetPassaftersendemail" element={<ResetPassaftersendemail />} />
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </Router>
  );
};

export default App;
