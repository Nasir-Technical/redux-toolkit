import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import About from "./redux/screen/About";
import Login from "./redux/screen/login";
import SignUp from "./redux/screen/SignUp";
import Cart from "./redux/screen/Cart";
import Navbar from "./Components/navbar";
import "../src/App.css"
import CartHome from "./redux/screen/cartHome";

export default function AppRouter() {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<CartHome />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
