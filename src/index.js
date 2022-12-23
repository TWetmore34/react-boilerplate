import React from "react";
import ReactDom from "react-dom/client"
import Main from "./App";
import "./style.css"
const App = ({name}) => {
    return <div>
      <Main/>
    </div>
  }
  
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App name="TJ" />);