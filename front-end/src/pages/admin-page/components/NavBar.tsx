import React from "react";
import logo from "../../../images/logo.png";
import { IoChevronBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import '../../../components/NavBar/style.css'
export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <span className="admin-icon" onClick={() => navigate("/")}>
        <IoChevronBackSharp size={35} color="white" />
      </span>
      <h1>Admin Page</h1>
      <li>
        <a href="https://www.c4cneu.com/">
          <img src={logo} alt="c4c logo" />
        </a>
      </li>
    </div>
  );
}
