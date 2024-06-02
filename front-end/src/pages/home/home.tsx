import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard/project-card.tsx'
const API_BASE = "http://localhost:3000";
export default function Home(){
    const [projects, setProjects] = useState([{}])
    const PROJECTS_API = `${API_BASE}/api/projects`;
    useEffect(() => {
        const findAllProjects = async () => {
            const response = await axios.get(PROJECTS_API)
            setProjects(response.data)
        }
        findAllProjects();
    }, [PROJECTS_API]);
    return (
        <div><ProjectCard projects={projects}/></div>
    )
}