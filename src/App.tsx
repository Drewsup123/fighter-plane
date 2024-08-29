import { useState } from 'react'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import SkyBox from './components/SkyBox.component'
import LowPolyWorld from "./assets/world/scene.gltf"
import { Scene } from 'three'
import { WorldModel } from './components/World.component'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { JetModel } from './components/Jet.component'

function App() {
  const gltf = useLoader(GLTFLoader, LowPolyWorld)
  return (
    <>
      <SkyBox />
      <PerspectiveCamera makeDefault position={[0, 10, 10]} />
      <OrbitControls target={[0, 0, 0]} />
      <ambientLight intensity={1} />
      {/* <WorldModel scale={[75, 75, 75]} position={[5, 0, 4]} /> */}
      <primitive object={gltf.scene} scale={[400, 400, 400]} position={[5, 0, 4]} />
      <JetModel
        scale={[0.4, 0.4, 0.4]}
        // position={[0, 10, 0]}
      />
    </>
  )
}

export default App
