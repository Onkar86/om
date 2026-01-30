import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
    position: [number, number, number];
    geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
    color: string;
    emissive: string;
    scale?: number;
}

function FloatingShape({ position, geometry, color, emissive, scale = 1 }: FloatingShapeProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.3;
        meshRef.current.rotation.y = time * 0.2;
    });

    const renderGeometry = () => {
        switch (geometry) {
            case 'box':
                return <boxGeometry args={[1 * scale, 1 * scale, 1 * scale]} />;
            case 'sphere':
                return <sphereGeometry args={[0.5 * scale, 32, 32]} />;
            case 'torus':
                return <torusGeometry args={[0.4 * scale, 0.15 * scale, 16, 100]} />;
            case 'octahedron':
                return <octahedronGeometry args={[0.6 * scale, 0]} />;
            default:
                return <boxGeometry args={[1 * scale, 1 * scale, 1 * scale]} />;
        }
    };

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                {renderGeometry()}
                <MeshDistortMaterial
                    color={color}
                    emissive={emissive}
                    emissiveIntensity={0.5}
                    metalness={0.8}
                    roughness={0.2}
                    distort={0.3}
                    speed={2}
                    transparent
                    opacity={0.9}
                />
            </mesh>
        </Float>
    );
}

export default function FloatingGeometry() {
    return (
        <group>
            {/* Various floating geometric shapes */}
            <FloatingShape
                position={[-4, 2, -3]}
                geometry="box"
                color="#00f0ff"
                emissive="#00f0ff"
                scale={0.8}
            />
            <FloatingShape
                position={[5, -1, -2]}
                geometry="sphere"
                color="#8b5cf6"
                emissive="#8b5cf6"
                scale={1.2}
            />
            <FloatingShape
                position={[-3, -3, -4]}
                geometry="torus"
                color="#f97316"
                emissive="#f97316"
                scale={1}
            />
            <FloatingShape
                position={[4, 3, -5]}
                geometry="octahedron"
                color="#ec4899"
                emissive="#ec4899"
                scale={0.9}
            />
            <FloatingShape
                position={[0, -2, -3]}
                geometry="sphere"
                color="#00f0ff"
                emissive="#00f0ff"
                scale={0.6}
            />
            <FloatingShape
                position={[-5, 0, -6]}
                geometry="box"
                color="#8b5cf6"
                emissive="#8b5cf6"
                scale={0.7}
            />
            <FloatingShape
                position={[3, 1, -4]}
                geometry="octahedron"
                color="#f97316"
                emissive="#f97316"
                scale={1.1}
            />
        </group>
    );
}
