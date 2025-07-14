import React from "react";
import { createRoot } from "react-dom/client";

// React.createElement =>   Object => HTMLElement(render)

const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Namaste React 🚀"
);

console.log(heading);
// JSX - HTML-like or XML-Like syntax

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

console.log(jsxHeading)

const root = createRoot(document.getElementById("root"));

root.render(heading);