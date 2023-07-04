import React from "react";
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from "./src/components/Header";
import FoodCards from "./src/components/FoodCards";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
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


  const App=()=>{
    return(
      <>
      {/* header needs to be there for all the pages but the body should change */}
      {/* when we search for the specific route the outlet picks up that page and replaces the present page with the new page  */}
      <Header/>
      <Outlet/>
      </>
    )
  }

  const appRouter=createBrowserRouter([
    {
    path: "/",
    element: <App />,
    children:[    
        {
          path:"/",
          element:<Body/>
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />
        }, 
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu />
        },   
    ],
    errorElement:<Error/>,
    },
  ])



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)



