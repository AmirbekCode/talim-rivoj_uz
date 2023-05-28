import { useState } from 'react'
import Navbar from './components/pages/navbar/navbar'
import './components/css/App.css'



function App() {
  
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <nav>
            <Navbar />
          </nav>
          <div className="content">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
