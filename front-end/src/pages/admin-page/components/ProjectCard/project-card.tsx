import React, {useState} from 'react'
import DeleteModal from '../ConfirmDelete/delete-modal.tsx';
import './style.css'
import { GoDotFill } from "react-icons/go";
import {  motion } from "framer-motion"
export default function ProjectCard({project, edit}) {
    
    const [isDeleteOpen, setisDeleteOpen] = useState(false)
    const isActive = project.active
    
    if (isDeleteOpen) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'unset'
    }

    return (<motion.div   initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          duration: 1.5,
          opacity: { duration: 2 },
        }} className='project-card'>
         <div style={{ textAlign: 'right' }}>
      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>Active:</span>
      <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
        <GoDotFill color={isActive? 'green': 'red'} size={30} />
      </span>
    </div>
        <h1>{project.title}</h1>

       <div className='img-container'><img src={project.image_url} alt="project_image" /></div> 
        <div className="project-buttons">
            <motion.button whileHover={{scale : 1.2, fontWeight: 'bold'}} className='edit'>Edit</motion.button>
            <motion.button onClick={()=> setisDeleteOpen(true)} whileHover={{scale : 1.2, fontWeight: 'bold'}}className='delete'>Delete</motion.button>
        </div>
        <DeleteModal project={project} open={isDeleteOpen} onClose={(e) => {setisDeleteOpen(false)
            if (e === true) {
                edit()
            }
        }} />
        </motion.div>
   
)
}