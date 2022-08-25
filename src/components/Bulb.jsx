const Bulb=props=>{
    return(
      <mesh{...props} receiveShadow castShadow>
        <pointLight intensity={3} />
        <sphereBufferGeometry args={[0.2,20,20]}/>
        <meshPhongMaterial emissive='yellow'/>
      </mesh>
    )
  }

  export default Bulb;