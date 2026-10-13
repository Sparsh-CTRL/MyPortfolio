import { motion } from "framer-motion"
import { useState } from "react"
import "./Timeline.css"


const experience = [
{title:"Frontend Designer Intern",org:"LazyEats",date:"Jan 2026 – Present",desc:"Designed responsive frontend interfaces for a food delivery app and collaborated on improving usability across devices."},
{title:"Co-Founder",org:"ARC, DSO LPU",date:"Jun 2025 – Apr 2026",desc:"Led marketing and technical event operations, organized hackathons, and contributed to ₹50,000+ in event revenue."},
{title:"Summer Training — DSA with Java",org:"Lovely Professional University",date:"Jun 2026 – Jul 2026",desc:"Practiced algorithms, searching, sorting, recursion, OOP, ArrayList and file handling in Java."}
]
const education = [
{title:"B.Tech Computer Science",org:"Lovely Professional University",date:"Jul 2024 – Present",desc:"CGPA: 7.2 · Phagwara, Punjab"},
{title:"Senior Secondary",org:"Saraswati Vidya Mandir Inter College",date:"Mar 2023 – Apr 2024",desc:"70% · Kanpur, Shukla Ganj"}
]

export default function Timeline(){

const [tab,setTab] = useState("experience")

const data = tab === "experience" ? experience : education

return(

<section className="timeline-section">

<div className="timeline-container">

<div className="timeline-header">

<span className="timeline-tag">TIMELINE</span>

<h2 className="timeline-title">My journey so far.</h2>

</div>

<div className="timeline-toggle">

<button
className={tab==="experience"?"active":""}
onClick={()=>setTab("experience")}
>
Experience
</button>

<button
className={tab==="education"?"active":""}
onClick={()=>setTab("education")}
>
Education
</button>

</div>

<div className="timeline">

{data.map((item,index)=>(

<motion.div
key={index}
className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}

initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}
viewport={{once:true}}
>

<div className="timeline-node"/>

<div className="timeline-card">

<span className="timeline-date">{item.date}</span>

<h3>{item.title}</h3>

<h4>{item.org}</h4>

<p>{item.desc}</p>

</div>

</motion.div>

))}

</div>

</div>

</section>

)
}