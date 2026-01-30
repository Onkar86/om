import { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { RoundedBox } from '@react-three/drei';

interface Image3DProps {
    imageUrl: string;
    position?: [number, number, number];
}

export default function Image3D({ imageUrl, position = [0, 0, 0] }: Image3DProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const frameRef = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    // Load the portrait image as texture
    const texture = useLoader(TextureLoader, imageUrl);

    useFrame((state) => {
        if (!meshRef.current || !frameRef.current) return;

        const time = state.clock.getElapsedTime();

        // Floating animation
        meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1;

        // Gentle rotation on Y axis
        meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.05;

        // Hover effect - scale and glow
        const targetScale = hovered ? 1.05 : 1;
        meshRef.current.scale.lerp(
            new THREE.Vector3(targetScale, targetScale, targetScale),
            0.1
        );

        // Rotate frame particles
        frameRef.current.rotation.z = time * 0.2;
    });

    return (
        <group position={position}>
            {/* Main image plane */}
            <mesh
                ref={meshRef}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <planeGeometry args={[3, 4]} />
                <meshStandardMaterial
                    map={texture}
                    metalness={0.3}
                    roughness={0.4}
                    emissive="#00f0ff"
                    emissiveIntensity={hovered ? 0.3 : 0.1}
                />
            </mesh>

            {/* Holographic glass overlay */}
            <mesh position={[0, 0, 0.05]}>
                <planeGeometry args={[3.1, 4.1]} />
                <meshPhysicalMaterial
                    transparent
                    opacity={0.15}
                    roughness={0}
                    metalness={1}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Animated border frame */}
            <group ref={frameRef}>
                {/* Corner particles */}
                {[
                    [-1.6, 2.1, 0.1],
                    [1.6, 2.1, 0.1],
                    [-1.6, -2.1, 0.1],
                    [1.6, -2.1, 0.1],
                ].map((pos, i) => (
                    <mesh key={i} position={pos as [number, number, number]}>
                        <sphereGeometry args={[0.05, 16, 16]} />
                        <meshStandardMaterial
                            color="#00f0ff"
                            emissive="#00f0ff"
                            emissiveIntensity={1}
                        />
                    </mesh>
                ))}
            </group>

            {/* Glowing edge lines */}
            <lineSegments>
                <edgesGeometry args={[new THREE.PlaneGeometry(3.2, 4.2)]} />
                <lineBasicMaterial color="#00f0ff" transparent opacity={0.5} />
            </lineSegments>

            {/* Background glow panel */}
            <mesh position={[0, 0, -0.1]}>
                <RoundedBox args={[3.4, 4.4, 0.05]} radius={0.1}>
                    <meshStandardMaterial
                        color="#000000"
                        emissive="#00f0ff"
                        emissiveIntensity={hovered ? 0.4 : 0.2}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </RoundedBox>
            </mesh>

            {/* Orbiting light particles */}
            {[0, 1, 2, 3].map((i) => {
                const angle = (i / 4) * Math.PI * 2;
                const radius = 2.5;
                return (
                    <mesh
                        key={i}
                        position={[
                            Math.cos(angle) * radius,
                            Math.sin(angle) * radius,
                            0.2,
                        ]}
                    >
                        <sphereGeometry args={[0.03, 16, 16]} />
                        <meshBasicMaterial color="#8b5cf6" />
                    </mesh>
                );
            })}
        </group>
    );
}
