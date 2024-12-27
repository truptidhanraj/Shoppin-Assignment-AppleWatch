import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchCollection from "./Componants/WatchCollection"
import WatchStudio from "./Componants/WatchStudio/WatchStudio";
import './App.css'




const App = () => {
  return (
<BrowserRouter>
<Routes>
<Route exact path="/" element={<WatchStudio/>}/>
<Route exact path="/watch-collection" element={<WatchCollection/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App