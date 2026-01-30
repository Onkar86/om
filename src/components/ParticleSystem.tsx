import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleSystem() {
    const particlesRef = useRef<THREE.Points>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    // Generate particle positions
    const particlesCount = 3000;
    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
        return positions;
    }, []);

    // Generate particle colors
    const colors = useMemo(() => {
        const colors = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            const colorChoice = Math.random();
            if (colorChoice < 0.33) {
                // Cyan
                colors[i * 3] = 0;
                colors[i * 3 + 1] = 0.95;
                colors[i * 3 + 2] = 1;
            } else if (colorChoice < 0.66) {
                // Purple
                colors[i * 3] = 0.8;
                colors[i * 3 + 1] = 0.2;
                colors[i * 3 + 2] = 1;
            } else {
                // White
                colors[i * 3] = 1;
                colors[i * 3 + 1] = 1;
                colors[i * 3 + 2] = 1;
            }
        }
        return colors;
    }, []);

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Add mouse listener
    useMemo(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation loop
    useFrame((state) => {
        if (!particlesRef.current) return;

        const time = state.clock.getElapsedTime();
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;

            // Floating animation
            positions[i3 + 1] += Math.sin(time + positions[i3]) * 0.001;

            // Mouse interaction - particles move away from cursor
            const dx = positions[i3] - mouseRef.current.x * 10;
            const dy = positions[i3 + 1] - mouseRef.current.y * 10;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 3) {
                positions[i3] += dx * 0.02;
                positions[i3 + 1] += dy * 0.02;
            }
        }

        particlesRef.current.geometry.attributes.position.needsUpdate = true;

        // Rotate entire particle system slowly
        particlesRef.current.rotation.y = time * 0.05;
    });

    return (
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
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
