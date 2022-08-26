
import { usePlane } from '@react-three/cannon'

const Plane =props =>{
    const [ref,api] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))

    return(
    <mesh ref={ref} {...props}receiveShadow castShadow>
      <planeGeometry args={[50,50]} />
      <meshPhysicalMaterial  color={'black'} />
    </mesh>
    )
  }

  export default Plane;

