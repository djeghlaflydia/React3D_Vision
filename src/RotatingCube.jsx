import {  Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = () => {

    const meshRef = useRef();
  
    useFrame(() =>{
      if(meshRef.current){
        meshRef.current.rotation.y += 0.01
        meshRef.current.rotation.x += 0.01
      }
    })

    return(
      <mesh ref={meshRef}>
          {/* eslint-disable-next-line react/no-unknown-property */}
        <cylinderGeometry args={[1,1,1]} />
          {/* eslint-disable-next-line react/no-unknown-property */}
        <meshLambertMaterial color="#468585" emissive="#468585" />
  
        {/*adding sparkles*/}
        <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="white"/>
  
      </mesh>
    )
  }

export default RotatingCube
