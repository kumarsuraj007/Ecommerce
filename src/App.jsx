import React from 'react'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component.jsx';
import { Routes, Route } from 'react-router-dom';


function Shop () {
  return <h2>Hello shop</h2>
}

function App() {
  return (
   <Routes>
    <Route path='/' element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='auth' element={<Authentication />} />
    </Route>
   </Routes>
  )
}

export default App
