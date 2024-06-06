import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import ProjectCard from './components/ProjectCard/project-card.tsx'
import { IoIosAddCircleOutline } from "react-icons/io";
import {  motion } from "framer-motion"

const API_BASE = process.env.REACT_APP_API_BASE;

export default function AdminPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);
  const [isActiveChecked, setIsActiveChecked] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const PROJECTS_API = `${API_BASE}/api/projects`;
  
  const handleCheckboxChange = () => {
    console.log("set")
    setIsActiveChecked(!isActiveChecked);
  };

  useEffect(() => {
    const findAllProjects = async () => {
      const response = await axios.get(PROJECTS_API);
      setProjects(response.data);
    };
    findAllProjects();
  }, [PROJECTS_API]);

  useEffect(() => {
    let filtered = projects;
  
    if (isActiveChecked) {
      filtered = filtered.filter(project => project.active);
    }
  
    if (searchValue !== '') {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  
    setFilteredProjects(filtered);
  }, [searchValue, isActiveChecked, projects]);
  

  return (
    <div className="admin-body">
      <h1>Your Projects</h1>
      <hr className="hr-line" />
      <div className="search-with-create" style={{display: "flex"}}>
      <motion.span whileHover={ {scale: 1.1 }} className="add-button"><IoIosAddCircleOutline size={50} color="white"/></motion.span>
      <div className="search-bar">
        <input onChange={e => setSearchValue(e.target.value)} type="text" className="search-icon" placeholder="Search" />
        <h2 style={{color: 'white',
            fontFamily: 'LEMON'
        }}>Filter by:</h2>
        <button id="filter-button"  className={isActiveChecked ? 'active' : 'inactive'} onClick={handleCheckboxChange}>Active</button>
      </div>
      </div>
     
      <div className="admin-project-list">
        {filteredProjects.map((project, i) => (
          <div key={i}><ProjectCard project={project}/></div>
        ))}
      </div>
    </div>
  );
}
