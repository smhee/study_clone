import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const FilterList = numbers.filter((item) => item % 2 === 0);

  return (
    <div>
      <h1>Hello SmHee</h1>
      <div>
        <p>Sample1</p>
        <ul>
          {numbers.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>Sample2</p>
        <ul>
          {FilterList.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
