import { Shoe, Picker } from '@/components/shoe-draco';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function ShoeRoute() {
  return (
    <main className="h-screen w-screen bg-slate-100">
      <h1 className="w-full text-center font-bold text-5xl">Nike Shoe</h1>
      <Picker />
      <Canvas
        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
        camera={{ position: [0, 0, 2] }}
        shadows
      >
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={true}
          enableDamping
          autoRotate
          rotateSpeed={1}
        />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[5, 20, 20]} />

        <Suspense fallback={null}>
          <Shoe />
          <Environment files={'./assets/hdr/royal_esplanade_1k.hdr'} />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={1}
            width={10}
            height={10}
            blur={0.4}
            far={1}
          />
        </Suspense>
      </Canvas>
    </main>
  );
}
