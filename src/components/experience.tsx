import { Fragment, useRef, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Experience() {
  const ref = useRef<any>();
  const size = useThree((state) => state.size);
  const [radius, setRadius] = useState(2);

  useEffect(() => {
    if (size.width / size.height + 0.7 > 2) {
      return;
    }
    setRadius(size.width / size.height + 0.7);
  }, [size]);

  return (
    <Fragment>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableDamping
        autoRotate
        rotateSpeed={10}
        zoom0={0.1}
      />
      <ambientLight intensity={0.3} />
      <spotLight
        color={"#ff0000"}
        position={[10, 10, 10]}
        angle={0.15}
        power={5}
        penumbra={1}
      />
      <pointLight color={"#7600fe"} position={[-10, -10, -10]} intensity={1} />

      <mesh ref={ref}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial color={"#000"} roughness={1} />
      </mesh>
    </Fragment>
  );
}
