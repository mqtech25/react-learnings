import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
// 1 day learn folder and react flow
// 2 day learn component
// 3 day learn props(properties)
// 4 day learn mini company card project objects
// 5 day learn css module 
// 6 day learn tailwindCss install
// 7 day UI design learn (feature base folder sturcture / atomic base folder structure)
// In feature base like header, body, footer saperate component while in atomic base each and every thing have saperate component
 

let usercard =[
  {
    'cardImag':'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'intro':'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et modi reprehenderit natus aspernatur, aut cumque rerum incidunt doloribus asperiores nam deleniti exercitationem.',
    'buttonTag':'Satisfied',
    'buttonTagColor':"#00a3d8"
  },
  {
    'cardImag':'https://plus.unsplash.com/premium_photo-1661548175981-5bd70ebefc81?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'intro':'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et modi reprehenderit natus aspernatur, aut cumque rerum incidunt doloribus asperiores nam deleniti exercitationem.',
    'buttonTag':'Underserved',
    'buttonTagColor':"#5ba05b"
  },
  {
    'cardImag':'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'intro':'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et modi reprehenderit natus aspernatur, aut cumque rerum incidunt doloribus asperiores nam deleniti exercitationem.',
    'buttonTag':'Underbanked',
    'buttonTagColor':"#8a6398"

  }
  
]

function App(){
  return (
    <>
     <Section1 userCardData = {usercard}/>
    </>
  )
}

export default App;