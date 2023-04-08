import './App.css';
//import About from './components/About';
//import Alerts from './components/Alerts';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  return (
    <>
    {/* <Router> */}
    <Navbar title ="Textutils" about="about textutils"/>
    <div className='container'>
    {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
             <Textform heading=' Enter the Text Below to Analyze'/> 
          </Route>
     </Switch> */}
       <Textform heading=' Enter the Text Below to Analyze'/> 

    </div>
   {/* </> </Router> */}

    </>
  );
}

export default App;
