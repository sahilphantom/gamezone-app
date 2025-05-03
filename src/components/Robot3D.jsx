import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  OrbitControls, 
  Environment, 
  RoundedBox, 
  BakeShadows,
  ContactShadows
} from '@react-three/drei'
import * as THREE from 'three'

function RobotModel(props) {
  const group = useRef()
  const [blinking, setBlinking] = useState(false)
  
  // Floating animation and blinking effect
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    
    // Subtle floating animation
    group.current.position.y = Math.sin(t / 2) / 20
    group.current.rotation.y = Math.sin(t / 8) / 10
    
    // Blinking animation - blink every 3 seconds for 0.15 seconds
    if (Math.floor(t * 10) % 30 === 0 && !blinking) {
      setBlinking(true)
      setTimeout(() => setBlinking(false), 150)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main body - single cube with rounded corners */}
      <RoundedBox 
        args={[2.2, 2.2, 2.2]} 
        radius={0.4} 
        smoothness={10} 
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial 
          color="#2a2a4a" 
          metalness={0.9} 
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          reflectivity={1}
        />
      </RoundedBox>

      {/* Face panel (slightly indented) */}
      <RoundedBox 
        args={[1.8, 1.2, 0.1]} 
        radius={0.2} 
        smoothness={10} 
        position={[0, 0, 1.05]}
        castShadow
      >
        <meshPhysicalMaterial 
          color="#1a1a2e" 
          metalness={0.7} 
          roughness={0.2}
          clearcoat={0.5}
        />
      </RoundedBox>

      {/* Eyes - semi-circular glowing pink */}
      <group position={[0, 0, 1.1]}>
        {[-0.4, 0.4].map((x, i) => (
          <React.Fragment key={i}>
            {/* Eye shape - half cylinder */}
            <mesh position={[x, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.25, 0.25, 0.1, 32, 1, false, 0, Math.PI]} />
              <meshBasicMaterial 
                color="#FF3D81" 
                toneMapped={false}
                opacity={blinking ? 0.1 : 1}
                transparent={true}
              />
            </mesh>
            
            {/* Brighter inner part */}
            <mesh position={[x, 0, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.15, 0.15, 0.1, 32, 1, false, 0, Math.PI]} />
              <meshBasicMaterial 
                color="#ffffff" 
                toneMapped={false}
                opacity={blinking ? 0.1 : 1}
                transparent={true}
              />
            </mesh>
            
            {/* Point light for each eye to create glow effect */}
            <pointLight 
              position={[x, 0, 0.2]} 
              color="#FF3D81" 
              intensity={blinking ? 0.1 : 2} 
              distance={4}
            />
          </React.Fragment>
        ))}
      </group>

      {/* Small bumps on corners and edges */}
      {[
        // Top corners
        [-1, 1, -1],
        [1, 1, -1],
        [-1, 1, 1],
        [1, 1, 1],
        // Bottom corners
        [-1, -1, -1],
        [1, -1, -1],
        [-1, -1, 1],
        [1, -1, 1],
        // Middle edges
        [0, 1, -1],
        [0, -1, -1],
        [0, 1, 1],
        [0, -1, 1],
        [-1, 0, -1],
        [1, 0, -1],
        [-1, 0, 1],
        [1, 0, 1],
        [-1, 1, 0],
        [1, 1, 0],
        [-1, -1, 0],
        [1, -1, 0]
      ].map((pos, i) => (
        <mesh key={i} position={[pos[0] * 1.1, pos[1] * 1.1, pos[2] * 1.1]} castShadow>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}
    </group>
  )
}

export default function Robot3D() {
  return (
    <div className="w-full h-full">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ 
          preserveDrawingBuffer: true,
          alpha: true,  // Enable transparency
          antialias: true
        }}
      >
        <color attach="background" args={[0, 0, 0, 0]} /> {/* Transparent background */}
        
        {/* Ambient light for base illumination */}
        <ambientLight intensity={0.2} />
        
        {/* Main key light */}
        <spotLight
          position={[5, 5, 5]}
          angle={0.25}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        {/* Fill light */}
        <spotLight
          position={[-5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow={false}
        />
        
        {/* Pink accent light for dramatic effect */}
        <pointLight 
          position={[0, 0, 3]} 
          color="#FF3D81" 
          intensity={0.5} 
          distance={6}
        />
        
        <RobotModel position={[0, 0, 0]} />
        
        {/* Environment for reflections */}
        <Environment preset="studio" />
        
        {/* Contact shadows for grounding */}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.6}
          scale={5}
          blur={2}
          far={4}
          resolution={256}
          color="#000000"
        />
        
        {/* Camera controls */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 2.2}
        />
        
        {/* Bake shadows for performance */}
        <BakeShadows />
      </Canvas>
    </div>
  )
}