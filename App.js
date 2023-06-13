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

// React.createElement  is an =>object=>when root.render is called ReactDom takes the object and converts into html and push it to the browser
// React.createElement =>object=> HTMLElment(render)=>object is converted to html in the DOM by reactdom

const heading=React.createElement("h1",{id:"heading"},"This is reactjs");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
console.log(heading)

const Navbar=()=>{
    return <h1>Navbar</h1>
}

const JsxHeading =()=> (
<div>
<h1>This is reactjs functional component</h1>
<Navbar/>
</div>
)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading/>)
console.log(JsxHeading)

const title=(
    <h1>Reactjs Application</h1>
)
const root2=ReactDOM.createRoot(document.getElementById("root2"));
root.render(title)
