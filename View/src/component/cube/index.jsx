import { Canvas } from '@react-three/fiber'
import Exp from './exp.jsx'
import './index.css'

function CanvasCube() {
  return (
    <Canvas className="canvas">
    <Exp/>
  </Canvas>
  )
}

export default CanvasCube
