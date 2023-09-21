// import { useState, useRef, useEffect } from "react";
import Scroll from "./component/Scroll";
import "./App.css";

function App() {
  return (
    <>
      <div
        style={{
          height: "400px",
          width: "250px",
          backgroundColor: "orange",
        }}
      >
        div1
      </div>
      <div
        style={{
          height: "400px",
          width: "250px",
          backgroundColor: "teal",
        }}
      >
        div2
      </div>
      <div
        style={{
          height: "400px",
          width: "250px",
          backgroundColor: "tomato",
        }}
      >
        div3
      </div>
      <div
        style={{
          height: "400px",
          width: "250px",
          backgroundColor: "red",
          marginBottom: "20px",
        }}
      >
        div4
      </div>

      <Scroll />
    </>
  );
}

export default App;
