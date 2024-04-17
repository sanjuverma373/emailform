import { useState } from 'react'
import { ContactUs } from './components/ContactUs'
import Emailform from './components/Emailform'
import './App.css'

function App() {

  return (
    <div className='container mx-auto bg-white max-w-[800px]'>
      <ContactUs />
      <Emailform/>
    </div>
  )
}

export default App
