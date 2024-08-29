import { Camera } from "@react-three/fiber"
import { Vector3 } from "three"

export let controls: { [key: string]: boolean } = {

}

window.addEventListener("keydown", e => {
    controls[e.key.toLowerCase()] = true
})

window.addEventListener("keyup", e => {
    controls[e.key.toLowerCase()] = false
})

let jawVelocity = 0
let pitchVelocity = 0;
let planeSpeed = 0.05
export const updatePlaneAxis = (x: Vector3, y: Vector3, z: Vector3, planePosition: Vector3, camera: Camera) => {
    jawVelocity = 0;
    pitchVelocity = 0;

    if (controls["a"]) {
        jawVelocity = 0.015
    }
    if(controls["d"]){
        jawVelocity = -0.015
    }
    if (controls["w"]) {
        pitchVelocity = -0.015   
    }
    if(controls["s"]){
        pitchVelocity = 0.015
    }
    if (controls["e"]) {
        planeSpeed = 0.2
    } else {
        planeSpeed = 0.05
    }
    x.applyAxisAngle(z, jawVelocity)
    y.applyAxisAngle(z, jawVelocity)

    y.applyAxisAngle(x, pitchVelocity)
    z.applyAxisAngle(x, pitchVelocity)

    x.normalize()
    y.normalize()
    z.normalize()

    planePosition.add(z.clone().multiplyScalar(-planeSpeed))
    camera.updateProjectionMatrix()
    // planePosition.add(y.multiplyScalar(planeSpeed))
    // planePosition.add(z.multiplyScalar(planeSpeed))
}