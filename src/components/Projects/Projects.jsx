import { motion, useScroll, useTransform } from "framer-motion"
import { useRef , useState } from "react"
import "./Projects.css"
import ProjectModal from "../ProjectModal/ProjectModal";

const projects = [
{title:"Online Grocery Shopping Platform",desc:"Responsive grocery shopping platform with product categories, cart, authentication and order management; deployed on Netlify.",tech:["React.js","JavaScript","HTML","CSS"],screenshots:[],features:["Browse products by category","Shopping cart and authentication","Order management","Responsive UI"],github:"https://github.com/Sparsh-CTRL/Online-grocery-website"},
{title:"Student Record Management System",desc:"Java-based record manager with CRUD, search, sorting, file-based storage and academic reports.",tech:["Java","DSA","OOP","File Handling"],screenshots:[],features:["CRUD student records","Searching and sorting","File-based storage","Topper and attendance reports"]}
]

export default function Projects(){

const ref = useRef(null)
const [selectedProject , setSelectedProject] = useState(null);

const { scrollYProgress } = useScroll({
target: ref
})

const x = useTransform(
scrollYProgress,
[0,1],
["0%", `-${(projects.length - 1) * 20}%`]//chane the value after * to controlhoriuzontal length of the scroll 
)

const scrollLength = projects.length * 50

return(

<section className="projects-section" id="projects">
<h2 className="Project-header">
My Projects</h2>
<div
className="projects-scroll"
ref={ref}
style={{height:`${scrollLength}vh`}}
>
<div className="projects-sticky">

<motion.div className="projects-track" style={{x}}>

{projects.map((p,i)=>(
<div key={i} className="project-card">

<div className="project-left">

<h2 className="project-title">
{p.title}
</h2>

<p className="project-desc">
{p.desc}
</p>

<div className="project-tech">
{p.tech.map((t,index)=>(
<span key={index} className="tech-pill">{t}</span>
))}
</div>

<div className="project-buttons">

{p.live && (
<a
href={p.live}
target="_blank"
rel="noopener noreferrer"
className="btn-primary"
>
Live Demo
</a>
)}

{p.github && (
<a
href={p.github}
target="_blank"
rel="noopener noreferrer"
className="btn-secondary"
>
Github
</a>
)}

</div>

</div>


<div
className="project-preview"
onClick={()=>setSelectedProject(p)}
>

<div className="sparsh-project-art"><span className="sparsh-project-kicker">SPARSH GUPTA / PROJECT {String(i + 1).padStart(2, "0")}</span><strong>{p.title}</strong><span>{p.tech.join("  ·  ")}</span></div>

</div>

</div>
))}

</motion.div>

</div>

</div>
{selectedProject && (

<ProjectModal
project={selectedProject}
onClose={()=>setSelectedProject(null)}
/>

)}

</section>

)
}