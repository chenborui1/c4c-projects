import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoIosClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import "./style.css";
const API_BASE = process.env.REACT_APP_API_BASE;

export default function EditModal({ open, onClose, project }) {
  const EDIT_API = `${API_BASE}/api/projects/edit`;
  const AuthToken = window.localStorage.getItem("token");

  const [initialData, setInitialData] = useState({
    id: project._id,
    title: project.title,
    header: project.header,
    description: project.description,
    img_url: project.image_url,
    active: project.active,
  });

  const [data, setData] = useState({ ...initialData });

  useEffect(() => {
    setInitialData({
        id: project._id,
      title: project.title,
      header: project.header,
      description: project.description,
      img_url: project.image_url,
      active: project.active,
    });
    setData({
        id: project._id,
      title: project.title,
      header: project.header,
      description: project.description,
      img_url: project.image_url,
      active: project.active,
    });
  }, [project, open]);

  if (!open) {
    return null;
  }

  const saveProject = () => {
    if (!data.title || !data.header || !data.description || !data.img_url) {
      console.log("missing required fields");
      return;
    }
    const response = async () => {
      console.log(data);
      await axios
        .post(EDIT_API, {
          headers: {
            Authorization: AuthToken,
          },
          data: data,
        })
        .then((response) => {
          
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
            className="add-modal"
          >
            <span onClick={onClose}>
              <IoIosClose size={50} className="exit-icon" />
            </span>
            <div className="signup-form">
              <div className="add-project-h1">
                <h1 style={{ color: "white" }}>Edit Project</h1>
              </div>
              <input
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                type="text"
                id="edit-title"
                name="title"
                placeholder="Enter a title"
                required
              />
              <input
                value={data.header}
                onChange={(e) => setData({ ...data, header: e.target.value })}
                type="text"
                name="header"
                id="edit-header"
                placeholder="Enter a header"
                required
              />

              <input
                value={data.img_url}
                onChange={(e) => setData({ ...data, img_url: e.target.value })}
                type="text"
                name="handleImg"
                id="edit-img"
                placeholder="Enter a Image URL"
                required
              />
              <textarea
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
                name="description"
                id="edit-description"
                rows={2}
                cols={70}
                placeholder="Enter a Description"
                required
              ></textarea>

              <button
                id="active-button"
                className={data.active ? "active" : "inactive"}
                onClick={() => {
                  
                  setData({ ...data, active: !data.active });
                }}
              >
                Active
              </button>
              <div>
                <button
                  id="create-button"
                  style={{ marginLeft: "80px" }}
                  onClick={saveProject}
                >
                  Save
                </button>
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
