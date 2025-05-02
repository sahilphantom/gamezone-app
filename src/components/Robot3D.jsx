import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshDistortMaterial } from '@react-three/drei'

function RobotModel(props) {
  const group = useRef()
  
  // Gentle rotation animation
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    group.current.rotation.y = Math.sin(t / 4) / 6
    group.current.position.y = Math.sin(t / 1.5) / 10
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main body - metallic box */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#b0b8c1" 
          metalness={0.9} 
          roughness={0.1} 
        />
      </mesh>

      {/* Bottom part */}
      <mesh castShadow receiveShadow position={[0, -1.3, 0]}>
        <boxGeometry args={[2.2, 0.4, 2.2]} />
        <meshStandardMaterial 
          color="#8c959e" 
          metalness={0.8} 
          roughness={0.2} 
        />
      </mesh>

      {/* Feet/legs */}
      {[-0.8, 0.8].map((x, i) => (
        <mesh key={i} castShadow receiveShadow position={[x, -1.7, 0]}>
          <boxGeometry args={[0.4, 0.4, 1]} />
          <meshStandardMaterial 
            color="#8c959e" 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      ))}

      {/* Face panel */}
      <mesh castShadow receiveShadow position={[0, 0.2, 1.01]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#1a1a2e" 
          metalness={0.5} 
          roughness={0.2} 
        />
      </mesh>

      {/* Eyes - glowing pink */}
      {[-0.4, 0.4].map((x, i) => (
        <mesh key={i} position={[x, 0.2, 1.02]}>
          <circleGeometry args={[0.2, 32]} />
          <meshBasicMaterial 
            color="#FF3D81" 
            toneMapped={false}
            emissive="#FF3D81"
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      {/* Antennas on top */}
      {[-0.5, 0.5].map((x, i) => (
        <mesh key={i} castShadow position={[x, 1.5, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
          <meshStandardMaterial 
            color="#8c959e" 
            metalness={0.8} 
            roughness={0.2} 
          />
        </mesh>
      ))}
    </group>
  )
}

export default function Robot3D() {
  return (
    <div className="w-full h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <RobotModel position={[0, -1, 0]} />
        
        <Environment preset="studio" />
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          minPolarAngle={Math.PI / 3} 
          maxPolarAngle={Math.PI / 1.5} 
        />
      </Canvas>
    </div>
  )
}