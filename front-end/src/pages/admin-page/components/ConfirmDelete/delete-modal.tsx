import React from "react";
import ReactDOM from "react-dom";
import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import "./style.css";
const API_BASE = process.env.REACT_APP_API_BASE;

export default function DeleteModal({ open, onClose, project }) {
  const DELETE_API = `${API_BASE}/api/projects/delete`;
  const AuthToken = window.localStorage.getItem("token");

  if (!open) {
    return null;
  }

  const deleteProject = () => {
    const response = async () => {
      await axios
        .delete(DELETE_API, {
          headers: {
            Authorization: AuthToken,
          },
          data: {
            id: project._id,
          },
        })
        .then((response) => {
         
          console.log("Deleted project");
          onClose(true);
        });
    };
    response();
  };

  return ReactDOM.createPortal(
    <>
      <div className="blur" onClick={onClose}></div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              opacity: { duration: 2 },
            }}
            exit={{ opacity: 0 }}
            className="modal"
          >
            <span onClick={onClose}>
              <IoIosClose size={50} className="exit-icon" />
            </span>
            <div className="signup-form">
              <h1 style={{ color: "white" }}>Confirm Delete: <div style={{color: "black"}}>{project.title}</div></h1>
              <div className="delete-buttons">
                <button onClick={onClose}>Cancel</button>
                <button className="delete-btn" onClick={deleteProject}>Delete Project</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      ,
    </>,
    document.getElementById("portal")!
  );
}
