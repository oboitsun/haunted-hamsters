import React from "react";
import "../styles/endless-hamsters.scss";
const hamsters = [
  "/imgs/ham1.png",
  "/imgs/ham3.png",
  "/imgs/ham4.png",
  "/imgs/ham5.png",
  "/imgs/ham2.png",
  "/imgs/ham7.png",
  "/imgs/ham8.png",
];
export default function EndlessHamsters() {
  return (
    <div className="endless-hamsters overflow-hidden bg-light-khaki">
      <div className=" relative w-full endless ">
        <div className="hams ">
          <ul>
            {hamsters.map((h, i) => (
              <li className="" key={i}>
                <img
                  className={`relative z-10 pic ${i > 3 && "hidden lg:block"}`}
                  src={h}
                  alt="ham"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="hams">
          <ul>
            <ul>
              {hamsters.map((h, i) => (
                <li key={i}>
                  <img
                    className={`pic ${i > 3 && "hidden lg:block"}`}
                    src={h}
                    alt="ham"
                  />
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
