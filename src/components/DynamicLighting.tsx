import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function DynamicLighting() {
    const pointLight1Ref = useRef<THREE.PointLight>(null);
    const pointLight2Ref = useRef<THREE.PointLight>(null);
    const pointLight3Ref = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Animate point lights in orbit
        if (pointLight1Ref.current) {
            pointLight1Ref.current.position.x = Math.sin(time * 0.5) * 8;
            pointLight1Ref.current.position.z = Math.cos(time * 0.5) * 8;
        }

        if (pointLight2Ref.current) {
            pointLight2Ref.current.position.x = Math.sin(time * 0.7 + Math.PI) * 6;
            pointLight2Ref.current.position.z = Math.cos(time * 0.7 + Math.PI) * 6;
        }

        if (pointLight3Ref.current) {
            pointLight3Ref.current.position.y = Math.sin(time * 0.3) * 4 + 2;
            pointLight3Ref.current.position.x = Math.cos(time * 0.4) * 5;
        }
    });

    return (
        <>
            {/* Ambient light - soft base illumination */}
            <ambientLight intensity={0.3} />

            {/* Main directional light - simulates sun */}
            <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            {/* Animated point lights with different colors */}
            <pointLight
                ref={pointLight1Ref}
                position={[5, 3, 5]}
                intensity={2}
                distance={15}
                color="#00f0ff"
                castShadow
            />

            <pointLight
                ref={pointLight2Ref}
                position={[-5, 2, -5]}
                intensity={1.5}
                distance={12}
                color="#8b5cf6"
            />

            <pointLight
                ref={pointLight3Ref}
                position={[0, 5, 0]}
                intensity={1}
                distance={10}
                color="#f97316"
            />

            {/* Spotlight for dramatic effect */}
            <spotLight
                position={[0, 10, 0]}
                angle={0.3}
                penumbra={0.5}
                intensity={0.5}
                castShadow
                color="#ffffff"
            />

            {/* Hemisphere light for natural ambient lighting */}
            <hemisphereLight
                color="#ffffff"
                groundColor="#444444"
                intensity={0.5}
            />
        </>
    );
}
