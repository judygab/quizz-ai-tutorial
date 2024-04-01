"use client";
import * as React from "react"
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const upAndDown = {
  animate: {
    y: ["40px", "-40px"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
    },
  },
};

const diagonal = {
  animate: {
    y: ["-40px", "40px"],
    x: ["-40px", "40px"],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
    },
  },
};

const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    viewBox="0 0 1784.88 1785"
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path d="M1080.215 246.508h483.996v483.996h-483.996Zm0 0" />
      </clipPath>
      <clipPath id="b">
        <path d="M1322.215 246.508c-133.652 0-242 108.347-242 242 0 133.652 108.348 241.996 242 241.996S1564.21 622.16 1564.21 488.508c0-133.653-108.344-242-241.996-242Zm0 0" />
      </clipPath>
      <clipPath id="c">
        <path d="M1080.215 246.508h483.719v483.715h-483.72Zm0 0" />
      </clipPath>
      <clipPath id="d">
        <path d="M1322.207 246.508c-133.648 0-241.992 108.344-241.992 241.992s108.344 241.992 241.992 241.992 241.996-108.344 241.996-241.992-108.348-241.992-241.996-241.992Zm0 0" />
      </clipPath>
      <clipPath id="e">
        <path d="M286 977h494v574H286Zm0 0" />
      </clipPath>
      <clipPath id="f">
        <path d="m238.84 954.023 623.32-28.21 29.938 661.527-623.32 28.21Zm0 0" />
      </clipPath>
      <clipPath id="g">
        <path d="m238.84 954.023 623.32-28.21 29.938 661.527-623.32 28.21Zm0 0" />
      </clipPath>
      <clipPath id="h">
        <path d="M592.184 488.508h730.03V1296h-730.03Zm0 0" />
      </clipPath>
      <clipPath id="i">
        <path d="M676.18 488.508h562.039c46.39 0 83.996 37.605 83.996 83.992v639.879c0 46.39-37.606 83.996-83.996 83.996h-562.04c-46.39 0-83.995-37.605-83.995-83.996V572.5c0-46.387 37.605-83.992 83.996-83.992Zm0 0" />
      </clipPath>
      <clipPath id="j">
        <path d="M592.184 488.508h729.703v807.695H592.184Zm0 0" />
      </clipPath>
      <clipPath id="k">
        <path d="M676.18 488.508h562.03c46.388 0 83.993 37.605 83.993 83.992v639.871c0 46.387-37.605 83.992-83.992 83.992H676.18c-46.39 0-83.996-37.605-83.996-83.992V572.5c0-46.387 37.605-83.992 83.996-83.992Zm0 0" />
      </clipPath>
      <clipPath id="l">
        <path d="M555.164 521.867h730.031V1329h-730.03Zm0 0" />
      </clipPath>
      <clipPath id="m">
        <path d="M639.16 521.867h562.04c46.39 0 83.995 37.606 83.995 83.992v639.88c0 46.39-37.605 83.995-83.996 83.995H639.16c-46.387 0-83.996-37.605-83.996-83.996V605.86c0-46.386 37.61-83.992 83.996-83.992Zm0 0" />
      </clipPath>
      <clipPath id="n">
        <path d="M555.164 521.867h729.703v807.696H555.164Zm0 0" />
      </clipPath>
      <clipPath id="o">
        <path d="M639.16 521.867h562.031c46.387 0 83.993 37.606 83.993 83.992v639.871c0 46.387-37.606 83.993-83.993 83.993h-562.03c-46.391 0-83.997-37.606-83.997-83.993V605.86c0-46.387 37.606-83.993 83.996-83.993Zm0 0" />
      </clipPath>
    </defs>
    <motion.g variants={diagonal} animate="animate" clipPath="url(#a)" id="orange-circle">
      <g clipPath="url(#b)">
        <path
          fill="#ff914d"
          d="M1080.215 246.508h483.996v483.996h-483.996Zm0 0"
        />
      </g>
    </motion.g>
    <motion.g variants={diagonal} animate="animate" clipPath="url(#c)" id="orange-cirle-border">
      <g clipPath="url(#d)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth={5.9996}
          d="M1322.207 246.508c-133.648 0-241.992 108.344-241.992 241.992 0 133.649 108.344 241.992 241.992 241.992 133.649 0 241.996-108.343 241.996-241.992 0-133.648-108.347-241.992-241.996-241.992Zm0 0"
        />
      </g>
    </motion.g>
    <motion.g variants={upAndDown} animate="animate" clipPath="url(#e)" id="yellow-shape">
      <g clipPath="url(#f)">
        <g clipPath="url(#g)">
          <path
            fill="#ffde59"
            d="M345.762 1204.2c169.097-81.747 7.61-161.91 126.304-214.009 118.696-52.093 213.082 58.352 198.575 207.79-9.547 97.94 215.98 262.324 42.714 333.859-173.265 71.535-194.19-84.54-312.742-100.563-141.043-19.191-142.207-184.886-54.851-227.078Zm0 0"
          />
        </g>
      </g>
    </motion.g>
    <g clipPath="url(#h)">
      <g clipPath="url(#i)">
        <path fill="#00bf63" d="M592.184 488.508h730.03v807.02h-730.03Zm0 0" />
      </g>
    </g>
    <g clipPath="url(#j)">
      <g clipPath="url(#k)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth={4.4997}
          d="M676.18 488.508h562.031c46.387 0 83.993 37.605 83.993 83.992v639.872c0 46.386-37.606 83.992-83.993 83.992H676.18c-46.39 0-83.996-37.606-83.996-83.992V572.5c0-46.387 37.605-83.992 83.996-83.992Zm0 0"
        />
      </g>
    </g>
    <g clipPath="url(#l)">
      <g clipPath="url(#m)">
        <path fill="#fff" d="M555.164 521.867h730.031v807.024h-730.03Zm0 0" />
      </g>
    </g>
    <g clipPath="url(#n)">
      <g clipPath="url(#o)">
        <path
          fill="none"
          stroke="#000"
          strokeWidth={4.4997}
          d="M639.16 521.867h562.032c46.387 0 83.992 37.606 83.992 83.992v639.872c0 46.387-37.605 83.992-83.992 83.992H639.16c-46.39 0-83.996-37.605-83.996-83.992V605.859c0-46.386 37.606-83.992 83.996-83.992Zm0 0"
        />
      </g>
    </g>
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1
      }}
      fill="none"
      stroke="#5271ff"
      strokeWidth={12.74915}
      d="M634.617 661.7h571.126M634.617 782.117h571.126M634.617 898.816h571.126M634.617 1018.418h571.126M634.617 1137.96h357.11"
      variants={draw}
      custom={5}
    />
  </svg>
)
export { SvgComponent as FileSvg }
