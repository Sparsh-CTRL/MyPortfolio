import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import "./Skills.css"
import {
FaReact,
FaNodeJs,
FaCss3Alt,
FaDatabase
} from "react-icons/fa"

import {
SiJavascript,
SiExpress,
SiSupabase,
SiFramer,
SiTailwindcss,
SiCplusplus,
SiPostgresql,
SiArduino
} from "react-icons/si"
const skills = [
{title:"Frontend",tech:["React","JavaScript","CSS","HTML"]},
{title:"Programming",tech:["Java","Python","JavaScript"]},
{title:"Data Structures",tech:["Java","Algorithms","ArrayList"]},
{title:"Developer Tools",tech:["Git","GitHub","VS Code"]},
{title:"Database",tech:["SQL","Database Basics"]},
{title:"Currently Learning",tech:["React","NodeJS","REST APIs"]}
]
const techIcons = {
NodeJS: FaNodeJs,
Express: SiExpress,
Supabase: SiSupabase,
"REST APIs": FaDatabase,

React: FaReact,
JavaScript: SiJavascript,
"Framer Motion": SiFramer,
CSS: FaCss3Alt,
Tailwind: SiTailwindcss,

"C++": SiCplusplus,
PostgreSQL: SiPostgresql,

Arduino: SiArduino
}
export default function Skills(){

const ref = useRef(null)

const { scrollYProgress } = useScroll({
target: ref,
offset: ["start start","end end"]
})

/* Card positions */

const xPositions = [
useTransform(scrollYProgress,[0,0.8],[0,-350]),
useTransform(scrollYProgress,[0,0.8],[0,0]),
useTransform(scrollYProgress,[0,0.8],[0,350]),
useTransform(scrollYProgress,[0,0.8],[0,-200]),
useTransform(scrollYProgress,[0,0.8],[0,200]),
useTransform(scrollYProgress,[0,0.8],[0,0])
]

const yPositions = [
useTransform(scrollYProgress,[0,1],[0,-120]),
useTransform(scrollYProgress,[0,1],[0,-120]),
useTransform(scrollYProgress,[0,1],[0,-120]),
useTransform(scrollYProgress,[0,1],[0,120]),
useTransform(scrollYProgress,[0,1],[0,120]),
useTransform(scrollYProgress,[0,1],[0,280])
]

const rotate = useTransform(scrollYProgress,[0,1],[-8,0])
const scale = useTransform(scrollYProgress,[0,1],[0.85,1])

return(

<section className="skills-section" id="skills">

<div className="skills-scroll" ref={ref}>

<div className="skills-sticky">

<div className="skills-header">

<span className="skills-tag">TECH STACK</span>

<h2 className="skills-title">
Technologies I build with.
</h2>

</div>

<div className="skills-stage">

{skills.map((skill,index)=>{

return(

<motion.div
key={index}
className="skill-card"
style={{
x:xPositions[index],
y:yPositions[index],
rotate,
scale
}}
>

<h3 className="skill-title">
{skill.title}
</h3>

<div className="skill-tech">
{skill.tech.map((t,i)=>{

const Icon = techIcons[t]

return(
<span key={i} className="tech-pill">

{Icon && <Icon className="tech-icon"/>}

{t}

</span>
)

})}

</div>

</motion.div>

)

})}

</div>

</div>

</div>

</section>

)

}