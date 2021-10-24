import React from "react";
const hamsters = ["/imgs/ham1.png"];
export default function EndlessHamsters() {
  return (
    <div className="overflow-hidden bg-light-khaki">
      <div className=" relative w-full endless ">
        <div className="hams">
          <ul>
            <li>
              <img className="pic" src="/imgs/ham1.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham2.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham3.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham4.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham5.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham6.png" />
            </li>
          </ul>
        </div>
        <div className="hams">
          <ul>
            <li>
              <img className="pic" src="/imgs/ham1.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham2.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham3.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham4.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham5.png" />
            </li>
            <li>
              <img className="pic" src="/imgs/ham6.png" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
