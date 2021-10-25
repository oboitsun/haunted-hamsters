import React from "react";
import FaqItem from "./FaqItem";
import "../styles/faq.scss";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import { motion } from "framer-motion";

const faqs = [
  { qstn: "How do I buy a Haunted Hamsters?", answr: "The Answer" },
  { qstn: "What Blockhain and technology are Haunted Hamsters on?", answr: "The Answer" },
  { qstn: "What can I do with once I get my Haunted Hamsters NFT?", answr: "The Answer" },
  { qstn: "How many Haunted Hamsters caan I buy?", answr: "The Answer" },
];
export default function FAQ() {
  return (
    <div id="faq">
      <div className="my-container ">
        <div className="">
          <Heading>FAQ'S</Heading>
          <SubHeading>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </SubHeading>
          <div className="flex flex-col  auto-rows-auto ">
            <div className="faq-divider"></div>
            {faqs.map((f, i) => (
              <FaqItem key={i} {...f} />
            ))}
          </div>
        </div>
        <div className="devil">
          <motion.img
            initial={{ x: 0, y: 0 }}
            animate={{ x: [0, 15, 0], y: [0, -24, 25, 0] }}
            transition={{
              delay: 0.3,
              repeatDelay: 0.3,
              repeatType: "reverse",
              repeat: "Infinity",
              ease: "easeOut",
              duration: 7,
            }}
            src="/imgs/devil.png"
            alt="devil"
          />
        </div>
      </div>
    </div>
  );
}
