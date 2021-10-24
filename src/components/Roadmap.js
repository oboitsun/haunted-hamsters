import React from "react";
import "./../styles/roadmap.scss";
import Heading from "./Heading";
const roadmap = [
  {
    direction: "ltr",
    month: "JUL",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    direction: "ltr",
    month: "AUG",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    direction: "rtl",
    month: "OCT",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    direction: "rtl",
    month: "NOV",
    text: " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
export default function Roadmap() {
  return (
    <div id="roadmap">
      <div className="my-container">
        <Heading>roadmap</Heading>
        <div className="part">
          <div className="dates">
            {roadmap.map(
              (r, i) =>
                i < 2 && (
                  <div
                    key={r.month}
                    className={`milestone-wrapper ${r.direction} pb-10 `}
                  >
                    <div className="date-pumpkin">
                      <img
                        className="block w-full"
                        src="/imgs/pumpkin.png"
                        alt="pumpkin"
                      />
                      <div className="date font-fright">{r.month}</div>
                    </div>
                    <div className="milestone-text">{r.text}</div>
                  </div>
                )
            )}
          </div>
          <div className="">
            <img src="/imgs/mummy-hamster.png" alt="mummy" />
          </div>
        </div>
        <div className="part">
          <div className="dates">
            {roadmap.map(
              (r, i) =>
                i > 1 && (
                  <div
                    key={r.month}
                    className={`milestone-wrapper ${r.direction} pb-10 `}
                  >
                    <div className="milestone-text">{r.text}</div>
                    <div className="date-pumpkin">
                      <div className="date font-fright">{r.month}</div>
                      <img
                        className="block w-full"
                        src="/imgs/pumpkin.png"
                        alt="pumpkin"
                      />
                    </div>
                  </div>
                )
            )}
          </div>
          <div className="part-pet ">
            <img src="/imgs/franken.png" alt="franken" />
          </div>
        </div>
      </div>
    </div>
  );
}
