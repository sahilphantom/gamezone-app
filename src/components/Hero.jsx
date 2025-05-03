import React from 'react'
import Robot3D from './Robot3D'

function Hero() {
  return (
    <main className="container mx-auto px-4 py-12 relative">
      {/* Full-width container for the 3D robot */}
      {/* <div className="w-full h-[600px] flex justify-center items-center">
        <Robot3D />
      </div> */}
      
      {/* Overlay text positioned on top of the 3D scene */}
      <div className="absolute top-24 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Why AIAF Exists?
        </h1>
        <p className="text-gray-200 mb-4 text-lg max-w-2xl bg-black/70 p-4 rounded-lg backdrop-blur-sm border border-green-900/30">
          AIAF is revolutionizing AI ownership through decentralized technology.
          We're creating a future where AI value is accessible to everyone, not just big tech.
        </p>
      </div>
    </main>
  )
}

export default Hero