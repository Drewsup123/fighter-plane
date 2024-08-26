import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from "@react-three/fiber";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas shadows style={{height: "100%", width: "100%", overflow: "hidden"}}>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
  </StrictMode>,
)
