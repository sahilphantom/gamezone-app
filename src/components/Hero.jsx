import React from 'react'
import FeatureList from './FeatureList'
import Robot3D from './Robot3D'
import { Canvas } from '@react-three/fiber'

const Hero = () => {
  return (
    <main className="container mx-auto px-4 py-12">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="bg-gradient-to-r from-[#0a1428] to-[#1a1a2e] rounded-lg p-4">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
      <Robot3D/>
    </Canvas>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Why<br />AIAF Exists?
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          The AI revolution is creating unprecedented value, but this value remains concentrated in the hands of a few large organizations. We're changing this paradigm by
        </p>
        
        <FeatureList />
      </div>
    </div>
  </main>
  )
}

export default Hero
