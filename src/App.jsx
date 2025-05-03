import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {
  return (
    <div className="min-h-screen bg-black/70 text-white">
      <Header />
      <Hero />
      <Features />
    </div>
  )
}

export default App