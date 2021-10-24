import React from "react";
import "../styles/heading.scss";
export default function Heading({ children }) {
  return <div className="heading font-fright uppercase text-center">{children}</div>;
}
