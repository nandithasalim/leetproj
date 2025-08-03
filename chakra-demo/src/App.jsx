import { useState } from 'react'
import Home from './Dashboard'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Top150Todo from './Top'
import Top75Todo from './Top75';
import './App.css'
import CodeExplanator from './Explain';
import Challenge from './Challenge';
import ChallengeView from './ChallengeView';
function App() {
  return(
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top150Todo />} />
        <Route path="/top75" element={<Top75Todo/>} />
        <Route path="/exp" element={<CodeExplanator/>}/>
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/challenge/:challengeId" element={<ChallengeView />} />
      </Routes>
    </Router>
 
  )
  
}

export default App
