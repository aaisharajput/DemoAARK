import { BrowserRouter, Route, Routes } from "react-router-dom";
import CanvasCube from "./component/cube" 
import Card from "./component/card"
import Navbar from "./component/Navbar"
import Aos from "./component/AOS/AOS";
import Locomotive from "./component/Locomotive/locomotive"


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>    
      <Route path="/" element={<Aos />} />
      <Route path="/canvas" element={<CanvasCube />} />
      <Route path="/card" element={<Card />} />
      <Route path="/locomotive" element={<Locomotive />} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
