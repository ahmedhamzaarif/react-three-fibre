import React, { useRef } from "react";
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from "@react-three/fiber";

const Scene = () => {
  let tex = useTexture('./image.png')
  tex.needsUpdate = true
  const cyl = useRef(null)
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta
  })

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <boxGeometry args={[2, 2, 2]} />
        {/* 3js :: CylinderGeometry(radiusTop : Float, radiusBottom : Float, height : Float, radialSegments : Integer, heightSegments : Integer, openEnded : Boolean, thetaStart : Float, thetaLength : Float) */}
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        {/* // Standard Material Require Light */}
        <meshStandardMaterial transparent map={tex} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default Scene;
