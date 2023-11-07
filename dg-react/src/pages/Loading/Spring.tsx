import React, { useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useSprings, a } from "@react-spring/three";

import './index.css';

const number = 35;
const colors = [
  "#FFD700", // 金色
  "#D3D3D3", // 淡灰色
  "#FDFD96", // 奶油白，这里选择了稍微带有一点黄色调的亮白色，因为纯白（#FFFFFF）在大多数设计中都很常见
  "#3CB371", // 青绿色
  "#00008B",
];

interface RandomReturnType {
  position: [number, number, number];
  color: string;
  scale: [number, number, number];
  rotation: [number, number, number];
}

const random = (i: number): RandomReturnType => {
  const r = Math.random();
  return {
    position: [100 - Math.random() * 200, 100 - Math.random() * 200, i * 1.5],
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    scale: [1 + r * 14, 1 + r * 14, 1],
    rotation: [0, 0, THREE.MathUtils.degToRad(Math.round(Math.random()) * 45)],
  };
};

interface DataItem {
  color: string;
  args: [number, number, number];
}

const data: DataItem[] = new Array(number).fill(null).map((): DataItem => {
  return {
    color: colors[Math.round(Math.random() * (colors.length - 1))],
    args: [0.1 + Math.random() * 9, 0.1 + Math.random() * 9, 10],
  };
});

function Content() {
  // @ts-ignore
  const [springs, api] = useSprings<number, RandomReturnType>(number, (i) => ({
    from: random(i),
    ...random(i),
    config: { mass: 20, tension: 150, friction: 50 },
  }));

  useEffect(
    () =>
      void setInterval(
        () => api.start((i: any) => ({ ...random(i), delay: i * 40 })),
        3000,
      ),
    [api],
  );

  return (
    <>
      {data.map((d, index) => (
        <a.mesh key={index} {...springs[index]} castShadow receiveShadow>
          <boxGeometry attach="geometry" args={d.args} />
          <a.meshStandardMaterial
            attach="material"
            color={springs[index].color as any}
            roughness={0.75}
            metalness={0.5}
          />
        </a.mesh>
      ))}
    </>
  );
}

function Lights() {
  return (
    <group>
      <pointLight intensity={0.3} />
      <ambientLight intensity={2} />
      <spotLight
        castShadow
        intensity={0.2}
        angle={Math.PI / 7}
        position={[150, 150, 250]}
        penumbra={1}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </group>
  );
}

export default function Boxes() {
  return (
    <div className="min-h-screen">
      <Canvas
        linear
        flat
        shadows
        camera={{ position: [0, 0, 100], fov: 100 }}
        style={{ width: "100%!important", height: "100%!important" }}
        className="canvas"
      >
        <Lights />
        <Content />
      </Canvas>
    </div>
  );
}
