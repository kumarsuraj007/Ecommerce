import React from 'react'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SigIn from './routes/sign-in/signIn.component.jsx';
import SignUp from './routes/sign-up-form/sign-up.component';
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
    <Route path='sign-in' element={<SigIn />} />
    </Route>
   </Routes>
  )
}

export default App
