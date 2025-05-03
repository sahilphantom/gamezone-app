// BlinkingRobot.jsx
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, OrbitControls } from '@react-three/drei';

export default function Robot3D() {
  const robotRef = useRef();
  const leftEyeRef = useRef();
  const rightEyeRef = useRef();
  const [blink, setBlink] = useState(false);
  let blinkInterval = 0;

  // Blinking effect
  useFrame((state, delta) => {
    blinkInterval += delta;
    if (blinkInterval > 2) {
      setBlink((prev) => !prev);
      blinkInterval = 0;
    }

    // Movement animation
    if (robotRef.current) {
      robotRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2;
    }

    // Blinking eyes
    if (leftEyeRef.current && rightEyeRef.current) {
      const scale = blink ? 0.1 : 1;
      leftEyeRef.current.scale.y = scale;
      rightEyeRef.current.scale.y = scale;
    }
  });

  return (
    <>
      <group ref={robotRef} position={[0, 0.5, 0]}>
        {/* Body */}
        <mesh castShadow>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#b0c4de" metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Head */}
        <mesh position={[0, 0.75, 0]}>
          <boxGeometry args={[2, 1, 1]} />
          <meshStandardMaterial color="#b0c4de" metalness={0.6} roughness={0.2} />
        </mesh>

        {/* Eyes */}
        <mesh ref={leftEyeRef} position={[-0.4, 0.75, 0.51]}>
          <boxGeometry args={[0.2, 0.2, 0.05]} />
          <meshStandardMaterial emissive="#ff00ff" emissiveIntensity={2} color="#000000" />
        </mesh>

        <mesh ref={rightEyeRef} position={[0.4, 0.75, 0.51]}>
          <boxGeometry args={[0.2, 0.2, 0.05]} />
          <meshStandardMaterial emissive="#ff00ff" emissiveIntensity={2} color="#000000" />
        </mesh>

        {/* Antennas */}
        <mesh position={[-0.5, 1.3, 0]} rotation={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} />
          <meshStandardMaterial color="#d3d3d3" />
        </mesh>

        <mesh position={[0.5, 1.3, 0]} rotation={[0.5, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 32]} />
          <meshStandardMaterial color="#d3d3d3" />
        </mesh>

        {/* Legs */}
        {[[-0.7, -0.5, 0.3], [0.7, -0.5, 0.3], [-0.7, -0.5, -0.3], [0.7, -0.5, -0.3]].map((pos, i) => (
          <mesh key={i} position={pos}>
            <cylinderGeometry args={[0.15, 0.15, 0.2, 32]} />
            <meshStandardMaterial color="#444" />
          </mesh>
        ))}
      </group>

      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <OrbitControls />
    </>
  );
}
