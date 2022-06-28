import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from "react-router";
import { Food } from './components/foodlist/foodlist';
import { FoodDetails } from './components/foodlist_details/foodlist_details';
import { Navbar } from './components/navbar/navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Food />} />
        <Route path="/food/:code" element={<FoodDetails />} />
      </Routes>
    </div>
  )
}

export default App
