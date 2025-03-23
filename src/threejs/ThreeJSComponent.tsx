"use client"

/*
Referencias y Estado:

mountRef: Referencia al elemento HTML donde se montará el renderizado.

isInitialized: Variable de referencia para evitar inicializaciones múltiples.

Configuración de Three.js:

Creación de la escena (scene).

Configuración de la cámara (camera) con una perspectiva adecuada.

Inicialización del WebGLRenderer con suavizado y transparencia.

Iluminación:

AmbientLight: Luz ambiental para iluminación general.

DirectionalLight: Luz direccional con sombras.

HemisphereLight: Luz hemisférica para simular iluminación natural.

Carga del Modelo GLTF:

Se carga el modelo desde la ruta proporcionada.

Se centra el modelo en la escena.

Se escala el modelo a un tamaño estándar.

Controles y Animación:

Se usa OrbitControls para permitir interacción con el mouse.

Se implementa un bucle de animación con requestAnimationFrame para actualizar la escena.
*/

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"
import styles from "./ThreeJSComponent.module.css"

interface Props {
  modelo: string
}

export const ThreeJSComponent = (modelo: Props) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const isInitialized = useRef(false)

  useEffect(() => {
    if (!mountRef.current || isInitialized.current) return

    isInitialized.current = true

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 1, 3)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true

    
    mountRef.current.appendChild(renderer.domElement)


    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    directionalLight.position.set(10, 10, 10)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1)
    hemiLight.position.set(0, 10, 0)
    scene.add(hemiLight)


    const loader = new GLTFLoader()
    loader.load(`/assets/threejs/${modelo.modelo}` , (gltf) => {
      const model = gltf.scene

      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)

      const size = box.getSize(new THREE.Vector3()).length()
      const desiredSize = 0.3
      const scale = desiredSize / size
      model.scale.set(scale, scale, scale)

      scene.add(model)

      camera.position.set(0, size * 0.5, size * 6 )
      camera.lookAt(center)
    })

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true


    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)


    return () => {
      window.removeEventListener("resize", handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [modelo.modelo])

  return <div ref={mountRef} className={styles.canva} />
}


