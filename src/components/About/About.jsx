import { motion } from "framer-motion"
import "./About.css"

export default function About(){

return(

<section className="about" id="about">

<div className="about-container">

<motion.div
className="about-left"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<span className="about-tag">

ABOUT ME

</span>

<h2 className="about-title">

Aspiring developer.<br/>
Curious problem solver.

</h2>

<p className="about-desc">

I am Sparsh Gupta, a B.Tech Computer Science student at Lovely Professional University. I enjoy creating responsive web experiences, learning full-stack development, and solving problems with Java and data structures. I also bring practical entrepreneurial experience from Lazy Eats.

</p>

</motion.div>


<motion.div
className="about-right"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.2}}
viewport={{once:true}}
>

<div className="about-stat">

<span className="stat-number">2+</span>
<span className="stat-label">Projects & Learning Builds</span>

</div>

<div className="about-stat">

<span className="stat-number">8+</span>
<span className="stat-label">Technologies</span>

</div>

<div className="about-stat">

<span className="stat-number">1</span>
<span className="stat-label">Entrepreneurial Venture</span>

</div>

<div className="about-stat">

<span className="stat-number">2024</span>
<span className="stat-label">B.Tech Started</span>

</div>

</motion.div>

</div>

</section>

)

}