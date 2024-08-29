/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 scene.gltf --transform 
Files: scene.gltf [71.52KB] > C:\Users\Drews\Downloads\low-poly_f16\scene-transformed.glb [38.9KB] (46%)
Author: SiTitan (https://sketchfab.com/SiTitan)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-f16-857c52e25ef146ec9da08a1f3c7706f2
Title: Low-poly F16
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import { Group, Matrix4, Vector3 } from 'three';
import { plane_position } from '../vars/global';
import { updatePlaneAxis } from '../globals/controls';

const x_rotation = new Vector3(1, 0, 0);
const y_rotation = new Vector3(0, 1, 0);
const z_rotation = new Vector3(0, 0, 1);

export function JetModel(props: any) {
    const { nodes, materials }: any = useGLTF('/scene-transformed.glb');
    const groupRef = useRef<Group>(null);

    useFrame(({ camera }) => {
        if (!groupRef.current) return;
        const rotationMatrix = new Matrix4()
            .makeBasis(x_rotation, y_rotation, z_rotation);
        const planeMatrix = new Matrix4()
            .makeTranslation(plane_position.x, plane_position.y, plane_position.z)
            .multiply(rotationMatrix);
        groupRef.current.matrixAutoUpdate = false;
        groupRef.current.matrix.copy(planeMatrix);
        groupRef.current.matrixWorldNeedsUpdate = true;

        //? Multiplication is necessary to chain together transforms and translations
        const cameraMatrix = new Matrix4()
            .multiply(new Matrix4().makeTranslation(plane_position.x, plane_position.y, plane_position.z))
            .multiply(rotationMatrix)
            .multiply(new Matrix4().makeRotationX(-0.3))
            .multiply(new Matrix4().makeTranslation(0, 0, 10))
        camera.matrixAutoUpdate = false;
        camera.matrix.copy(cameraMatrix);
        camera.matrixWorldNeedsUpdate = true;

        updatePlaneAxis(x_rotation, y_rotation, z_rotation, plane_position, camera)
    })

    return (
        <group {...props} dispose={null} ref={groupRef}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.material_0} position={[0, 0.881, 1.87]} rotation={[-1.614, 0, 0]} />
            <mesh geometry={nodes.Object_35.geometry} material={materials.material_1} position={[0, 0.955, 0.495]} rotation={[-0.087, 0, 0]} />
            <mesh geometry={nodes.Object_37.geometry} material={materials.material_2} position={[0, 0.955, 0.495]} rotation={[-0.087, 0, 0]} />
            <mesh geometry={nodes.Object_39.geometry} material={materials.material_3} position={[0, 0.955, 0.495]} rotation={[-0.087, 0, 0]} />
            <mesh geometry={nodes.Object_85.geometry} material={materials.material_4} />
            <mesh geometry={nodes.Object_88.geometry} material={materials.material_5} />
            <mesh geometry={nodes.Object_96.geometry} material={materials.material_6} position={[0, 1.108, -0.003]} rotation={[Math.PI / 9, 0, 0]} />
        </group>
    )
}

useGLTF.preload('/scene-transformed.glb')
