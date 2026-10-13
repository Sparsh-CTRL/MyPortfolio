import { motion } from "framer-motion"
import "./ActivityTicker.css"

const activities = ["💻 Building web projects","🚀 Learning full-stack development","☕ Practicing Java and DSA","🛒 Improving grocery website UI","🎓 B.Tech CSE at LPU","🧩 Exploring React","🌱 Growing as a developer"]

export default function ActivityTicker(){

const items = [...activities,...activities]

return(

<div className="ticker">

<div className="ticker-label">

LIVE ACTIVITY

</div>

<div className="ticker-track">

<motion.div
className="ticker-inner"
animate={{x:["0%","-50%"]}}
transition={{
duration:22,
repeat:Infinity,
ease:"linear"
}}
>

{items.map((item,index)=>(

<span
key={index}
className="ticker-item"
>

{item}

</span>

))}

</motion.div>

</div>

</div>

)

}