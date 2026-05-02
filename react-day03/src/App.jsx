// import React from "react";
import Card from './component/Card.jsx'
// 1 day learn folder and react flow
// 2 day learn component
// 3 day learn props(properties)

function App(){
  return (
    <>
  <div className="card-wrapper">
  <Card username="Saleh" age={30} img="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" bio="Saleh Bio"/>
  <Card username="Bilal" age={28} img="https://img.freepik.com/free-photo/horizontal-shot-handsome-young-guy-with-blue-eyes-bristle-has-positive-expression_273609-2960.jpg?semt=ais_hybrid&w=740&q=80" bio="Bilal Bio"/>
  <Card username="Qasim" age={26} img="https://img.freepik.com/premium-photo/doubting-two-options_1187-374968.jpg" bio="Qasim Bio"/>
  <Card username="Hussain" age={25} img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_BhSaLLhcu4jV3sVsrbnL1DfsVngr7hjUvA&s" bio="Hussain Bio"/>
  
  </div>
    </>
  )
}

export default App