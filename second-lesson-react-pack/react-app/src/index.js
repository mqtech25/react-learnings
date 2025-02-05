import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import XComponent from './customComponent'
import reportWebVitals from './reportWebVitals';
import CustomClass from './components/ClassComponent'
import Massage from './components/StateMassage';
import StateCounter from './components/StateCounter';
import ClickFunc from './components/ClickFunc';
import ClassEventHandler from './components/ClassEventHandler';
import EventBind from './components/EventBind';
let root =ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
    <XComponent componentName='function' propsIsA='object'/>
    <CustomClass componentName='class'/>
    <Massage/>
    <StateCounter/>
    <ClickFunc/>
    <ClassEventHandler/>
      <EventBind/>
  </React.StrictMode>
)
// old code from render 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <XComponent />
//   </React.StrictMode>
//   ,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
