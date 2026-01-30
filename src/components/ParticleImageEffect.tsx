import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleImageEffectProps {
    position?: [number, number, number];
}

export default function ParticleImageEffect({ position = [0, 0, 0] }: ParticleImageEffectProps) {
    const particlesRef = useRef<THREE.Points>(null);

    // Create particle pattern (you can customize this)
    const particlesCount = 2000;

    const { positions, colors, sizes } = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);
        const sizes = new Float32Array(particlesCount);

        // Create a rectangular pattern for the portrait
        const width = 3;
        const height = 4;

        for (let i = 0; i < particlesCount; i++) {
            // Random position within portrait bounds
            positions[i * 3] = (Math.random() - 0.5) * width;
            positions[i * 3 + 1] = (Math.random() - 0.5) * height;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 0.5;

            // Gradient colors (cyan to purple)
            const mixFactor = positions[i * 3 + 1] / height + 0.5;
            colors[i * 3] = THREE.MathUtils.lerp(0, 0.8, mixFactor); // R
            colors[i * 3 + 1] = THREE.MathUtils.lerp(0.95, 0.2, mixFactor); // G
            colors[i * 3 + 2] = 1; // B

            // Random sizes
            sizes[i] = Math.random() * 0.05 + 0.02;
        }

        return { positions, colors, sizes };
    }, []);

    useFrame((state) => {
        if (!particlesRef.current) return;

        const time = state.clock.getElapsedTime();
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;

            // Wave animation
            const originalY = positions[i3 + 1];
            positions[i3 + 1] = originalY + Math.sin(time * 2 + positions[i3] * 2) * 0.03;

            // Pulsing Z depth
            positions[i3 + 2] += Math.sin(time * 3 + i * 0.1) * 0.002;
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;

        // Gentle rotation
        particlesRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
    });

    return (
        <group position={position}>
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-color"
                        args={[colors, 3]}
                    />
                    <bufferAttribute
                        attach="attributes-size"
                        args={[sizes, 1]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    vertexColors
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                    blending={THREE.AdditiveBlending}
                />
            </points>

            {/* Central glow sphere */}
            <mesh>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial
                    color="#00f0ff"
                    emissive="#00f0ff"
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.3}
                    wireframe
                />
            </mesh>
        </group>
    );
}
