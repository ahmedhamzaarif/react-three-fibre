import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./components/Scene";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="h-screen">
        <Canvas
          flat
          camera={{ fov: 40  }}
          // fallback
        >
          {/* <OrbitControls /> */}
          <ambientLight
          // intensity={0.1}
          />
          {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
          <Scene />

          <EffectComposer>
            <Bloom
              mipmapBlur // Enables or disables mipmap blur.
              intensity={7.0}
              luminanceThreshold={0.1} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.3} // smoothness of the luminance threshold. Range is [0, 1]
            />
            {/* <ToneMapping adaptive /> */}
          </EffectComposer>
        </Canvas>
      </div>
    </div>
  );
}
