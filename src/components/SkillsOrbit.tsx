import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
    { name: 'React', color: '#61DAFB', position: [0, 0, 0] as [number, number, number] },
    { name: 'TypeScript', color: '#3178C6', position: [3, 2, -1] as [number, number, number] },
    { name: 'Three.js', color: '#000000', position: [-3, 2, -1] as [number, number, number] },
    { name: 'Node.js', color: '#339933', position: [2, -2, -2] as [number, number, number] },
    { name: 'Next.js', color: '#000000', position: [-2, -2, -2] as [number, number, number] },
    { name: 'Tailwind', color: '#06B6D4', position: [4, 0, -3] as [number, number, number] },
    { name: 'Python', color: '#3776AB', position: [-4, 0, -3] as [number, number, number] },
];

function SkillSphere({ name, color, position, index }: {
    name: string;
    color: string;
    position: [number, number, number];
    index: number;
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.getElapsedTime();
        const speed = 0.3 + (index * 0.05);
        const radius = 5;

        // Orbital motion
        groupRef.current.position.x = Math.cos(time * speed + index) * radius;
        groupRef.current.position.z = Math.sin(time * speed + index) * radius;
        groupRef.current.position.y = Math.sin(time * speed * 0.5 + index) * 2;

        // Sphere rotation
        if (meshRef.current) {
            meshRef.current.rotation.x = time * 0.5;
            meshRef.current.rotation.y = time * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
            <group ref={groupRef} position={position}>
                <mesh ref={meshRef} castShadow>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshStandardMaterial
                        color={color}
                        emissive={color}
                        emissiveIntensity={0.3}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </mesh>

                {/* Skill name text */}
                <Text
                    position={[0, -1, 0]}
                    fontSize={0.3}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    {name}
                </Text>

                {/* Glow ring */}
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[0.6, 0.02, 16, 100]} />
                    <meshBasicMaterial color={color} transparent opacity={0.3} />
                </mesh>
            </group>
        </Float>
    );
}

export default function SkillsOrbit() {
    return (
        <group>
            {skills.map((skill, index) => (
                <SkillSphere
                    key={skill.name}
                    name={skill.name}
                    color={skill.color}
                    position={skill.position}
                    index={index}
                />
            ))}

            {/* Central core */}
            <mesh>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#ffffff"
                    emissive="#00f0ff"
                    emissiveIntensity={0.5}
                    wireframe
                />
            </mesh>
        </group>
    );
}
