import { motion } from "framer-motion"
import "./Footer.css"

export default function Footer(){

return(

<section className="footer" id="contact">

<motion.div
className="footer-container"

initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}

transition={{duration:0.6}}

viewport={{once:true}}
>

<span className="footer-tag">
CONTACT
</span>

<h2 className="footer-title">

Let's build something<br/>
<span className="accent">interesting.</span>

</h2>

<p className="footer-desc">

I'm always open to discussing new projects,
interesting ideas, or engineering challenges.

</p>


<div className="footer-buttons">

<a
href="https://github.com/Sparsh-CTRL"
target="_blank"
className="footer-btn"
>
Github
</a>

<a
href="https://linkedin.com/in/sparshbuilt/"
target="_blank"
className="footer-btn"
>
LinkedIn
</a>

<a
href="mailto:guptasparsh824@gmail.com"
className="footer-btn primary"
>
Email Me
</a>

</div>

</motion.div>

</section>

)
}