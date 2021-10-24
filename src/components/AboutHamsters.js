import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import "../styles/about-us.scss";
export default function AboutHamsters() {
  return (
    <div id="about-us" className="bg-light-khaki">
      <div className="my-container">
        <Heading>What is haunted hamsters</Heading>
        <SubHeading>
          Haunted Hamsters is a game centered around breedable, and oh-so-adorable
          creatures we call Haunted Hamsters! Each cat is one-of-a-kind and 100% owned by
          you; it cannot be replicated, taken away, or destroyed.
        </SubHeading>
      </div>
    </div>
  );
}
