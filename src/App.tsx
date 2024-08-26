import { useState } from 'react'
import { PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei'
import SkyBox from './components/SkyBox.component'
import LowPolyWorld from "./assets/cartoon_low_poly_world_map.glb"

function App() {
  return (
    <>
      {/* <Environment background={false} files={ } /> */}
      {/* <Environment files={LowPolyWorld} /> */}
      <SkyBox />
      <PerspectiveCamera makeDefault position={[0, 10, 10]} />
      <OrbitControls target={[0, 0, 0]} />
    </>
  )
}

export default App
