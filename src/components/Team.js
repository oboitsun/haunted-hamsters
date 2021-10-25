import React from "react";
import "./../styles/team.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubHeading from "./SubHeading";
import Heading from "./Heading";
const team = [
  {
    src: "/imgs/ham4.png",
    name: "Hiro",
    position: "Developer",
  },
  {
    src: "/imgs/ham5.png",
    name: "Error",
    position: "Artist",
  },
  {
    src: "/imgs/ham1.png",
    name: "Sunny",
    position: "Artist",
  },
  {
    src: "/imgs/ham7.png",
    name: "mdk",
    position: "Promotion",
  },
];
export default function Team() {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const cont = {
    show: {
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { transition: { duration: 0.3 } },
  };
  const item = {
    show: {
      x: 0,
      scale: [1, 1.3, 1],
      opacity: 1,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.5 },
    },
    hidden: { x: "-100%", scale: 0, opacity: 0, transition: { duration: 0.3 } },
  };
  const item1 = {
    show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { y: "-50px", opacity: 0, transition: { duration: 0.3 } },
  };
  return (
    <div id="team" className=" ">
      <div className="my-container">
        <Heading>team</Heading>
        <SubHeading>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s
        </SubHeading>
        <motion.div
          variants={cont}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
          className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-6 mt-6 lg:grid-cols-4 lg:grid-rows-1 lg:mt-10"
        >
          {team.map((t, i) => (
            <motion.div variants={item} key={i} className="flex flex-col w-full">
              <div className="w-full relative z-[1] hover">
                <img
                  src={t.src}
                  alt={t.name}
                  layout="responsive"
                  width={239}
                  height={253}
                />
              </div>
              <motion.p variants={item1} className="font-fright team-name ">
                {t.name}
              </motion.p>
              <motion.p
                variants={item1}
                className="text-crmsn font-bold text-xs lg:text-sm xl:text-base "
              >
                {t.position}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}