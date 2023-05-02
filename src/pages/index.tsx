import Experience from "@/components/experience";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      transition={{ type: "spring", stiffness: 100 }}
      className="h-screen w-screen flex flex-col items-center select-none"
    >
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        transition={{ type: "spring", stiffness: 100 }}
        className="w-full p-12 max-w-3xl"
      >
        <nav className=" flex items-center justify-between text-slate-200">
          <a href="#" className="font-bold text-lg text">
            Sphere
          </a>
          <ul className="flex gap-2 text-slate-400">
            <li>Explore</li>
            <li>About</li>
          </ul>
        </nav>
      </motion.header>
      <Canvas
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
      >
        <Experience />
      </Canvas>

      <motion.footer
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed bottom-24 text-white"
      >
        <h2 className="font-bold text-4xl">Give it a spin</h2>
      </motion.footer>
    </motion.main>
  );
}
