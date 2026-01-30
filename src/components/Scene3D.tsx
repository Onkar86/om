import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { ReactNode, Suspense } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
    children: ReactNode;
    cameraPosition?: [number, number, number];
    enableControls?: boolean;
}

export default function Scene3D({
    children,
    cameraPosition = [0, 0, 10],
    enableControls = false
}: Scene3DProps) {
    return (
        <Canvas
            gl={{
                antialias: true,
                alpha: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.2,
            }}
            shadows
            className="fixed inset-0 w-full h-full"
            style={{ background: 'transparent' }}
        >
            <Suspense fallback={null}>
                {/* Camera */}
                <PerspectiveCamera
                    makeDefault
                    position={cameraPosition}
                    fov={75}
                    near={0.1}
                    far={1000}
                />

                {/* Optional camera controls */}
                {enableControls && (
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                )}

                {/* Fog for depth */}
                <fog attach="fog" args={['#000000', 15, 40]} />

                {/* Scene content */}
                {children}
            </Suspense>
        </Canvas>
    );
}
