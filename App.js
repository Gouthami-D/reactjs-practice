import React from "react";
import ReactDOM from 'react-dom/client';

//Nested html elements creation 

// const parent= React.createElement("div",{id:"parent"}, 
// React.createElement("div",{id:"child"},[
//     React.createElement("h1",{id:"heading"},"I am heading tag"),
//     React.createElement("h2",{id:"heading"},"I am heading tag")
// ]),
// React.createElement("div",{id:"child2"},[
//     React.createElement("h1",{id:"heading"},"I am heading2 tag"),
//     React.createElement("h2",{id:"heading"},"I am heading2 tag")
// ]));
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent)

//Single element

// const heading=React.createElement("h1",{id:"heading"},"hello");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// console.log(heading)

const heading=React.createElement("h1",{id:"heading"},"This is reactjs");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)
console.log(heading)