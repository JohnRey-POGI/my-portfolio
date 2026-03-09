import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const TechAtom = ({ position, color, scale, ringScale = 1, speed = 1 }) => {
  const groupRef = useRef();
  const sphereRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  const targetRingScale = new THREE.Vector3();

  // Reusable objects to avoid garbage collection
  const targetPos = new THREE.Vector3();
  const targetColor = new THREE.Color();
  const targetScale = new THREE.Vector3();

  useFrame((state, delta) => {
    // 1. Continuous Rotation of Rings
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.2 * speed;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.5 * speed;
      ring1Ref.current.rotation.y += delta * 0.2 * speed;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x += delta * 0.4 * speed;
      ring2Ref.current.rotation.y -= delta * 0.3 * speed;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.3 * speed;
      ring3Ref.current.rotation.z += delta * 0.5 * speed;
    }

    // 2. Smooth Movement (Lerp Position)
    if (groupRef.current) {
      targetPos.set(position[0], position[1], position[2]);
      groupRef.current.position.lerp(targetPos, 0.05);

      // Smooth Scale
      targetScale.set(scale, scale, scale);
      groupRef.current.scale.lerp(targetScale, 0.05);
    }
    // Ring scaling (morph effect)
    targetRingScale.set(ringScale, ringScale, ringScale);

    if (ring1Ref.current) {
      ring1Ref.current.scale.lerp(targetRingScale, 0.05);
    }

    if (ring2Ref.current) {
      ring2Ref.current.scale.lerp(targetRingScale, 0.05);
    }

    if (ring3Ref.current) {
      ring3Ref.current.scale.lerp(targetRingScale, 0.05);
    }

    // 3. Smooth Color Transition
    targetColor.set(color);
    
    const updateMaterial = (ref) => {
      if (ref.current) {
        ref.current.material.color.lerp(targetColor, 0.05);
        ref.current.material.emissive.lerp(targetColor, 0.05);
      }
    };

    updateMaterial(sphereRef);
    updateMaterial(ring1Ref);
    updateMaterial(ring2Ref);
    updateMaterial(ring3Ref);
  });


  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Central Sphere */}
        <mesh ref={sphereRef}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial 
            roughness={0.2} 
            metalness={0.8} 
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Ring 1 */}
        <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.4, 0.04, 16, 100]} />
          <meshStandardMaterial roughness={0.2} metalness={0.8} emissiveIntensity={0.8} />
        </mesh>
        
        {/* Ring 2 */}
        <mesh ref={ring2Ref} rotation={[-Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.8, 0.04, 16, 100]} />
          <meshStandardMaterial roughness={0.2} metalness={0.8} emissiveIntensity={0.8} />
        </mesh>

        {/* Ring 3 */}
        <mesh ref={ring3Ref} rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[2.2, 0.04, 16, 100]} />
          <meshStandardMaterial roughness={0.2} metalness={0.8} emissiveIntensity={0.8} />
        </mesh>
      </group>
    </Float>
  );
};

export default TechAtom;