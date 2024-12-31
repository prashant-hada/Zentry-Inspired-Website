import React from 'react'
import Hero  from './components/Hero'
import About from "./components/About"
import Navbar from './components/Navbar'

function App() {
  return (
  <main className='relative min-h-screen w-screen overflow-x-hidden'>
    <Navbar />
    <Hero />
    <About />
    <section className='z-0 bg-blue-300 min-h-screen' />
  </main>
  )
}

export default App