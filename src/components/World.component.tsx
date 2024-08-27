import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const World = () => {
    const gltf = useLoader(GLTFLoader, '/world.scene.gltf')
    return <primitive object={gltf.scene} />
}
 
export default World;
