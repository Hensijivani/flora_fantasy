import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Componet/Navbar'
import Mainbody from './Componet/Mainbody'
import Footer from './Componet/Footer'
import Birthday from './Componet/Birthday'
import Engagement from './Componet/Engagement'
import Anniversary from './Componet/Anniversary'
import Opening from './Componet/Opening'
import Congratulations from './Componet/Congratulation'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
          <Mainbody />
          </Route>
          <Route path='/birthday'>
            <Birthday />
          </Route>
          <Route path='/engagement'>
            <Engagement />
          </Route>
          <Route path='/anniversary'>
            <Anniversary />
          </Route>
          <Route path='/opening'>
            <Opening />
          </Route>
          <Route path='/congratulations'>
            <Congratulations />
          </Route>
        </Switch>
        <Footer />
      </Router>


    </>
  )
}

export default App
