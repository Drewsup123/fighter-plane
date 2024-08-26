import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from "@react-three/fiber";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Canvas shadows>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Canvas>
  </StrictMode>,
)
