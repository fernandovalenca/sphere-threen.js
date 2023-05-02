import Experience from "@/components/experience";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <main className="bg-black h-screen w-screen flex flex-col items-center select-none">
      <header className="w-full p-12 max-w-3xl">
        <nav className=" flex items-center justify-between text-slate-200">
          <a href="#" className="font-bold text-lg text">Sphere</a>
          <ul className="flex gap-2 text-slate-400">
            <li>Explore</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
      <Canvas
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <Experience />
      </Canvas>

      <footer className="fixed bottom-24 text-white">
        <h2 className="font-bold text-4xl">Give it a spin</h2>
      </footer>
    </main>
  );
}
