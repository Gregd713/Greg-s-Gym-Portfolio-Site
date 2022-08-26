import logo from './logo.svg';
import { Canvas } from 'react-three-fiber';
import {Physics} from '@react-three/cannon';
import Bulb from './components/Bulb'
import Plane from './components/Floor';
import Orbit from './components/Orbit';
import {Suspense} from 'react';
import Model from './components/Model';
import BoundingBox from './components/BoundinBox';

import Dragable from './components/Dragable';

import './App.css';

function App() {
  return (
  <div style={{height:'100vh',width:'100vw'}}>
    <Canvas style={{background:'black'}} camera={{position:[7,9,13]}}>
      <Physics>
      <Orbit/>
      <Plane position = {[0,-0.5,0]} />
      <Bulb position={[0,20,4]}/>
      <Bulb position={[4,20,4]}/>
      <Bulb position={[-44,20,4]}/>
      <Dragable transformGroup>
      <BoundingBox 
       position={[-9,2,4]}
       dims={[3,2,9]}
      offset={[4,-.6,-4]}>
      <Suspense>
        <Model 
        path='/truck/truck.glb'
        scale ={new Array(3).fill(1)}
        />
      </Suspense>
      </BoundingBox>
      </Dragable>
      <Suspense>
        <Model 
        path='/jets/jets.glb'
        scale ={new Array(3).fill(1.75)}
        />
      </Suspense>

      <Dragable transformGroup>
      <BoundingBox  
       position={[0,8,0]}
       dims={[2,2,2]}
      offset={[0,-2.7,0]}>
      <Suspense>
        <Model 
        path='/radar/radar.glb'
        scale ={new Array(3).fill(1)}
        />
      </Suspense>
      </BoundingBox>
      </Dragable>

      <Dragable transformGroup>
      <BoundingBox 
       position={[4,8,3]}
       dims={[2,2,2]}
      offset={[-3.1,-4,-2.5]}>
      <Suspense>
        <Model 
        path='/turrets/turrets.glb'
        scale ={new Array(3).fill(1.5)}
        />
      </Suspense>
      </BoundingBox>
      </Dragable>

      <Dragable transformGroup>
      <BoundingBox  
       position={[-4,8,3]}
       dims={[2,2,2]}
      offset={[-3.1,-4,-2.5]}>
      <Suspense>
        <Model 
        path='/turrets/turrets2.glb'
        scale ={new Array(3).fill(1.5)}
        />
      </Suspense>
      </BoundingBox>
      </Dragable>

      <BoundingBox 
      position= {[0,4,0]}
      dims={[12,4,10]}
      offset={[0,-1.6,0]}
      >
      <Suspense>
        <Model 
        path='/gym/GYM.glb'
        scale ={new Array(3).fill(2)}
        />
      </Suspense>
      </BoundingBox>
      <BoundingBox 
      position= {[5,3,7.5]}
      dims={[8,.5,4]}
      offset={[-4,.2,-6]}
      >
      <Suspense>
        <Model 
        path='/tags/tags.glb'
        scale ={new Array(3).fill(1.5)}
        />
      </Suspense>
      </BoundingBox>

      </Physics>

      <ambientLight intensity={0.6}/>

    </Canvas>
  </div>
  );
}

export default App;
