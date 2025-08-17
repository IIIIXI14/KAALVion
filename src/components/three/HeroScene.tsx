"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SpinningTorus() {
	const meshRef = useRef<THREE.Mesh>(null);
	useFrame((_, delta) => {
		if (!meshRef.current) return;
		meshRef.current.rotation.x += delta * 0.2;
		meshRef.current.rotation.y += delta * 0.3;
	});
	return (
		<mesh ref={meshRef}>
			<torusKnotGeometry args={[1, 0.3, 128, 32]} />
			<meshStandardMaterial color="#6EE7F9" metalness={0.4} roughness={0.2} />
		</mesh>
	);
}

export function HeroScene() {
	return (
		<div className="absolute inset-0 -z-10">
			<Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
				<color attach="background" args={["#0b0b0b"]} />
				<ambientLight intensity={0.4} />
				<directionalLight position={[4, 4, 4]} intensity={1.2} />
				<SpinningTorus />
				<OrbitControls enableZoom={false} enablePan={false} />
			</Canvas>
		</div>
	);
} 