import React, { useState } from "react";
import "./Slidercontainer.css";
import { Context } from "../context/Context";
export default function Slidercontainer() {
  const [colorRed, setColorRed] = useState(0);
  const [colorGreen, setColorGreen] = useState(0);
  const [colorBlue, setColorBlue] = useState(0);
  let value = { red: colorRed, green: colorGreen, blue: colorBlue };
  console.log(value);

  return (
    <Context.Provider value={value}>
      <div
        className="container"
        style={{
          backgroundColor: `rgb(${colorRed},${colorGreen},${colorBlue})`,
        }}
      >
        {/* <h1 style={{ fontFamily: "monospace", color: "skyblue" }}>RGB slider</h1> */}
        <div className="wrapper">
          R
          <input
            type="range"
            min={0}
            max={255}
            id="red"
            onChange={(event) => setColorRed(event.target.value)}
          />
        </div>
        <div className="wrapper">
          G
          <input
            type="range"
            min={0}
            max={255}
            id="blue"
            onChange={(event) => setColorGreen(event.target.value)}
          />
        </div>
        <div className="wrapper">
          B
          <input
            type="range"
            min={0}
            max={255}
            id="green"
            onChange={(event) => setColorBlue(event.target.value)}
          />
        </div>
        <span className="output">
          rgb({colorRed},{colorGreen},{colorBlue})
        </span>
      </div>
    </Context.Provider>
  );
}
