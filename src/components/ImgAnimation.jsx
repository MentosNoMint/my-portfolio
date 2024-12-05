import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const ImgAnimation = () => {
    const imagesRef = useRef([])
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 })
    const [countImg, setCountImg] = useState(0)
    const images = [
        "znak.png",
        "note.png",
        "cactus.png",
        "cloud.png",
        "cat.png",
        "toy.png",
        "star.png",
        "rainbow.png",
        "leak.png",
        "znak.png",
        "note.png",
        "cactus.png",
        "cloud.png",
        "cat.png",
        "toy.png",
        "star.png",
        "rainbow.png",
        "leak.png",
        "znak.png",
        "note.png",
        "cactus.png",
        "cloud.png",
        "cat.png",
        "toy.png",
        "znak.png",
        "note.png",
        "cactus.png",
        "cloud.png",
        "cat.png",
        "toy.png",
        "star.png",
        "rainbow.png",
        "leak.png",
        "znak.png",
        "note.png",
        "cactus.png",
        "cloud.png",
        "cat.png",
        "toy.png",
        "star.png",
        "rainbow.png",
        "leak.png",
        "znak.png",
        "note.png",
        "cactus.png",
        "cloud.png",
        "cat.png",
        "toy.png",
    ]

    //ТЕОРЕМА Пифагора для нахождения расстояния между двумя точками на плоскости
    const calculateDistance = (x1, y1, x2, y2) => {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    }

    useEffect(() => {
        const handleMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", handleMousePosition)

        return () => {
            window.removeEventListener("mousemove", handleMousePosition)
        }
    }, [])

    useGSAP(() => {
        const distance = calculateDistance(mousePosition.x, mousePosition.y, prevMousePosition.x, prevMousePosition.y);
    
        if (distance > 50) {
            setPrevMousePosition(mousePosition);
            const imgs = gsap.utils.toArray(imagesRef.current.children);
            const currentIndex = countImg; 
    
            gsap.set(imgs[currentIndex], {
                x: mousePosition.x,
                y: mousePosition.y,
                zIndex: 100,
                scale: 4,
            });
    
            if (mousePosition.x !== 0 && mousePosition.y !== 0) {
                gsap.to(imgs[currentIndex], {
                    x: mousePosition.x,
                    y: mousePosition.y,
                    opacity: 1,
                    duration: 0.3,
                    scale: 4,
                    onComplete: () => {
                        gsap.to(imgs[currentIndex], {
                            opacity: 0,
                            scale: 0.5,
                            duration: 0.5,
                            delay: 0.3,
                        }),
                        setCountImg((prev) => (prev + 1) % images.length); 
                    },
                });
            }
        }
    }, [mousePosition, prevMousePosition, countImg]); 
    

    return (
        <div className='w-full h-screen relative overflow-hidden bg-black' ref={imagesRef} >
            {images.map(img => (
                <img src={`/assets/img/${img}`} alt="img" className='opacity-0 absolute w-10' />
            ))}
        </div>
    )
}

export default ImgAnimation
