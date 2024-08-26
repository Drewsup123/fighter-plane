import { useTexture } from "@react-three/drei";
import { BackSide } from "three";
import SkyBoxTexture from "../assets/skybox_img.jpg"
import LowPolySkyBoxTexture from "../assets/low_poly_skybox.jpg"
const SkyBox = () => {
    const map = useTexture(LowPolySkyBoxTexture);
    return (
        <mesh>
            <sphereGeometry args={[60, 50, 50]} />
            <meshBasicMaterial
                side={BackSide}
                map={map}
            />
        </mesh>
    );
}
 
export default SkyBox;