import { Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Text3DComponent() {
    const textRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!textRef.current) return;
        const time = state.clock.getElapsedTime();

        // Subtle floating animation
        textRef.current.position.y = Math.sin(time * 0.5) * 0.1;

        // Gentle rotation
        textRef.current.rotation.y = Math.sin(time * 0.3) * 0.05;
    });

    return (
        <Center position={[0, 0, 0]}>
            <mesh ref={textRef}>
                <Text3D
                    font="/fonts/helvetiker_bold.typeface.json"
                    size={1.5}
                    height={0.3}
                    curveSegments={12}
                    bevelEnabled
                    bevelThickness={0.02}
                    bevelSize={0.02}
                    bevelOffset={0}
                    bevelSegments={5}
                >
                    OM
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#00f0ff"
                        emissiveIntensity={0.5}
                        metalness={0.9}
                        roughness={0.1}
                    />
                </Text3D>
            </mesh>
        </Center>
    );
}
