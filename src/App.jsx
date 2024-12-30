import React from 'react'
import Hero  from './components/Hero'

function App() {
  return (
  //   <main>
  //     <h1 className="text-3xl font-bold underline text-blue-600">
  //   Hello world!
  // </h1>
  // <h1 className="text-3xl font-bold font-general underline text-blue-600">
  //   Hello world!
  // </h1>
  // <h1 className="text-3xl font-bold font-zentry underline text-blue-600">
  //   Hello world!
  // </h1>
  // <h1 className="text-3xl font-bold font-circular-web underline text-blue-600">
  //   Hello world!
  // </h1>
  // <h1 className="text-3xl font-bold font-robert-medium underline text-blue-600">
  //   Hello world!
  // </h1>
  // <h1 className="text-3xl font-bold font-robert-regular underline text-blue-600">
  //   Hello world!
  // </h1>
  // </main>
  <main className='relative min-h-screen w-screen overflow-x-hidden'>
    <Hero />
    <section className='z-0 bg-blue-300 min-h-screen' />
  </main>
  )
}

export default App