//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDom.render(
  <div>
    <h1>This is an unordered list.</h1>
    <ul>
      <li> Banana </li>
      <li> Apple </li>
      <li> Cherry </li>
    </ul>
  </div>,
  document.getElementById("root")
);
