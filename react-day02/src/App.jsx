import React from "react";
import Card from './component/Card'
import Navbar from "./component/Navbar";

// first day learn folder and react flow
// second day learn component

function App(){
  return(
    <>
    <Navbar/>
    <div className="card-wrapper">
    <Card/>
    <Card/>
    <Card/>
    </div>
    </>
  )
}

export default App

