import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Project {
    name: string;
    description: string;
    color: string;
    position: [number, number, number];
}

const projects: Project[] = [
    {
        name: 'E-commerce Platform',
        description: 'Next.js & Stripe',
        color: '#00f0ff',
        position: [-4, 2, -2],
    },
    {
        name: 'AI Chat Application',
        description: 'React & OpenAI',
        color: '#8b5cf6',
        position: [4, 2, -2],
    },
    {
        name: 'Portfolio Website',
        description: 'Three.js & React',
        color: '#f97316',
        position: [-4, -2, -2],
    },
    {
        name: 'Mobile Banking App',
        description: 'React Native',
        color: '#ec4899',
        position: [4, -2, -2],
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.getElapsedTime();

        // Gentle floating animation
        meshRef.current.position.y = project.position[1] + Math.sin(time * 0.5 + index) * 0.2;

        // Rotate on hover
        if (hovered) {
            meshRef.current.rotation.y += 0.02;
        } else {
            meshRef.current.rotation.y = Math.sin(time * 0.3 + index) * 0.1;
        }

        // Scale on hover
        const targetScale = hovered ? 1.1 : 1;
        meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    });

    return (
        <group
            ref={meshRef}
            position={project.position}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* Main card */}
            <RoundedBox args={[2.5, 3, 0.2]} radius={0.1} smoothness={4} castShadow>
                <meshStandardMaterial
                    color={hovered ? project.color : '#1a1a1a'}
                    emissive={project.color}
                    emissiveIntensity={hovered ? 0.5 : 0.2}
                    metalness={0.8}
                    roughness={0.2}
                    transparent
                    opacity={0.9}
                />
            </RoundedBox>

            {/* Project name */}
            <Text
                position={[0, 0.8, 0.15]}
                fontSize={0.25}
                color="white"
                anchorX="center"
                anchorY="middle"
                maxWidth={2}
                textAlign="center"
                font="/fonts/inter-bold.woff"
            >
                {project.name}
            </Text>

            {/* Description */}
            <Text
                position={[0, 0.3, 0.15]}
                fontSize={0.15}
                color="#aaaaaa"
                anchorX="center"
                anchorY="middle"
                maxWidth={2}
                textAlign="center"
            >
                {project.description}
            </Text>

            {/* Glow effect when hovered */}
            {hovered && (
                <mesh position={[0, 0, -0.05]}>
                    <planeGeometry args={[2.8, 3.3]} />
                    <meshBasicMaterial
                        color={project.color}
                        transparent
                        opacity={0.2}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            )}

            {/* Border frame */}
            <mesh position={[0, 0, 0.11]}>
                <ringGeometry args={[1.2, 1.25, 4]} />
                <meshBasicMaterial color={project.color} opacity={hovered ? 0.8 : 0.4} transparent />
            </mesh>
        </group>
    );
}

export default function ProjectShowcase3D() {
    return (
        <group>
            {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
            ))}
        </group>
    );
}
