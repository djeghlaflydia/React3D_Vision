import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./Projects.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar />
            <Hero/>
            <About/>
            {/*<Projects />*/}
        </main>
    )
}
export default App








{/*import { OrbitControls } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";
import RotatingCube from "./RotatingCube";


const App = () => {
  return(
    <Canvas style={{ height:'100vh', width:'100vw', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6}/>

      <color attach="background" args={['#F0F0F0']} />
      <RotatingCube/>
    </Canvas>
  )
}

export default App;*/}