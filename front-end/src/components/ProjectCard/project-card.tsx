import React from "react"
import './style.css'
const projectCard = (props) => {
  const projects = props.projects
  return (
    <div className="project-list">{projects.filter((project) => project.active).map((project)=> (
      <div className="card">
        <div className="content">
          <h1 className="title">{project.title}</h1>
          <h2 className="header">{project.header}</h2>
          <p className="description">{project.description}</p>
        </div>
        <img src={project.image_url} alt="" />
      </div>
    ))}</div>
  )
}

export default projectCard