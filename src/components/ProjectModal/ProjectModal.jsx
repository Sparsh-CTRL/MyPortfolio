import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import "./ProjectModal.css"

export default function ProjectModal({ project, onClose }) {

const [index,setIndex] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{
setIndex((prev)=>(prev+1) % project.screenshots.length)
},3500)

return ()=>clearInterval(interval)

},[project])


return(

<motion.div
className="modal-overlay"
initial={{ opacity:0 }}
animate={{ opacity:1 }}
exit={{ opacity:0 }}
onClick={onClose}
>

<motion.div
className="modal-container"
initial={{ scale:0.95, opacity:0 }}
animate={{ scale:1, opacity:1 }}
exit={{ scale:0.95, opacity:0 }}
transition={{ duration:0.3 }}
onClick={(e)=>e.stopPropagation()}
>

{/* LEFT SIDE CAROUSEL */}

<div className="modal-left">

<AnimatePresence mode="wait">

<motion.img
key={index}
src={project.screenshots[index]}
className="carousel-image"

initial={{ opacity:0, x:80 }}
animate={{ opacity:1, x:0 }}
exit={{ opacity:0, x:-80 }}

transition={{ duration:0.25 }}
/>

</AnimatePresence>

</div>


{/* RIGHT SIDE DETAILS */}

<div className="modal-right">

<h2 className="modal-title">
{project.title}
</h2>

<p className="modal-desc">
{project.desc}
</p>

<div className="modal-features">

  <h4>Key Features</h4>

  <ul>
    {project.features.map((f, i) => (
      <li key={i}>{f}</li>
    ))}
  </ul>

</div>



<div className="modal-tech">

{project.tech.map((t,i)=>(
<span key={i} className="modal-tech-pill">
{t}
</span>
))}

</div>

<div className="modal-links">

{project.live && (
<a
href={project.live}
target="_blank"
rel="noopener noreferrer"
>
Live Demo
</a>
)}

{project.github && (
<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
>
Github
</a>
)}

</div>

</div>


</motion.div>

</motion.div>

)
}