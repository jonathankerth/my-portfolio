import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

const ParticleBackground = () => {
  const containerRef = useRef()
  const mousePos = useRef({ x: 0, y: 0 })
  const particlesMesh = useRef()
  const clock = useRef(new THREE.Clock())

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    )
    camera.position.z = 20

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Custom particle geometry
    const particleCount = 2000
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const scales = new Float32Array(particleCount)
    const randomness = new Float32Array(particleCount * 3)

    const colorChoices = [
      new THREE.Color('#2196F3'), // Blue
      new THREE.Color('#64B5F6'), // Light Blue
      new THREE.Color('#1976D2'), // Dark Blue
      new THREE.Color('#BBDEFB'), // Very Light Blue
    ]

    for (let i = 0; i < particleCount; i++) {
      // Position
      const i3 = i * 3
      const radius = Math.random() * 10
      const spinAngle = Math.random() * Math.PI * 2
      const branchAngle = ((i % 3) * Math.PI * 2) / 3

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius
      positions[i3 + 1] = Math.sin(branchAngle + spinAngle) * radius
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Randomness
      randomness[i3] = Math.random() - 0.5
      randomness[i3 + 1] = Math.random() - 0.5
      randomness[i3 + 2] = Math.random() - 0.5

      // Color
      const color =
        colorChoices[Math.floor(Math.random() * colorChoices.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      // Scale
      scales[i] = Math.random()
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))
    geometry.setAttribute(
      'aRandomness',
      new THREE.BufferAttribute(randomness, 3)
    )

    // Custom shader material
    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float aScale;
        attribute vec3 aRandomness;
        varying vec3 vColor;
        uniform float uTime;
        uniform float uMouseX;
        uniform float uMouseY;
        
        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          
          // Rotation
          float angle = uTime * 0.2;
          modelPosition.xz *= mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          
          // Mouse interaction
          float mouseDistance = distance(modelPosition.xy, vec2(uMouseX, uMouseY));
          float mouseEffect = 1.0 - clamp(mouseDistance / 5.0, 0.0, 1.0);
          
          // Random movement
          modelPosition.xyz += aRandomness * sin(uTime * 0.5) * 0.5;
          
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectedPosition = projectionMatrix * viewPosition;

          gl_Position = projectedPosition;
          gl_PointSize = aScale * 3.0 * (1.0 + mouseEffect);
          
          vColor = color;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uMouseX: { value: 0 },
        uMouseY: { value: 0 },
      },
    })

    particlesMesh.current = new THREE.Points(geometry, material)
    scene.add(particlesMesh.current)

    // Mouse movement handler
    const handleMouseMove = (event) => {
      gsap.to(mousePos.current, {
        duration: 0.8,
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
        ease: 'power2.out',
      })
    }

    // Animation
    const animate = () => {
      const elapsedTime = clock.current.getElapsedTime()

      if (particlesMesh.current) {
        particlesMesh.current.material.uniforms.uTime.value = elapsedTime
        particlesMesh.current.material.uniforms.uMouseX.value =
          mousePos.current.x
        particlesMesh.current.material.uniforms.uMouseY.value =
          mousePos.current.y

        particlesMesh.current.rotation.y = elapsedTime * 0.05
      }

      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

export default ParticleBackground
