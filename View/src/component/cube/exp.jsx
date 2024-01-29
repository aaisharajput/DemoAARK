import { OrbitControls } from "@react-three/drei"


function Exp() {
  return (<>
    <OrbitControls />
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  </>
  )
}

export default Exp

