import logo from './logo.svg';
import { Canvas } from 'react-three-fiber';
import Floor from './components/Floor';
import Orbit from './components/Orbit';
import './App.css';

function App() {
  return (
  <div style={{height:'100vh',width:'100vw'}}>
    <Canvas style={{background:'black'}} camera={{position:[7,7,7]}}>
      <Orbit/>
      <axesHelper args={[5]}/>
      
    </Canvas>
  </div>
  );
}

export default App;
