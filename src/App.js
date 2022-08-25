import logo from './logo.svg';
import { Canvas } from 'react-three-fiber';
import {Physics} from '@react-three/cannon';
import Bulb from './components/Bulb'
import Plane from './components/Floor';
import Orbit from './components/Orbit';
import './App.css';

function App() {
  return (
  <div style={{height:'100vh',width:'100vw'}}>
    <Canvas style={{background:'black'}} camera={{position:[7,7,7]}}>
      <Physics>
      <Orbit/>
      <axesHelper args={[5]}/>
      <Plane position = {[0,-0.5,0]} />
      </Physics>
      <Bulb position={[0,3,0]}/>

    </Canvas>
  </div>
  );
}

export default App;
