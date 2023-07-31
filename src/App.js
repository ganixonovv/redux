import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Main, Register, Login} from './components'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route />
      </Routes>
    </div>
  )
}

export default App