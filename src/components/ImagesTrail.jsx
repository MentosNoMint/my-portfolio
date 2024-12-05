import React, { useState, useEffect, useRef } from 'react'

const ImagesTrail = () => {
    const imagesRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const images = ["cat.png", "cloud.png", "note.png", "star.png", "cactus.png", "toy.png", "rainbow.png", "leak.png", "znak.png"];
    const threshold = 100;

    useEffect(() => {
        const handleMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMousePosition);
        return () => {
            window.removeEventListener('mousemove', handleMousePosition);
        }
    }, [])

    return (
        <div className='w-full h-screen relative overflow-hidden bg-black' ref={imagesRef} >
            {images.map(img => (
                <img src={`/assets/img/${img}`} alt="img" className='opacity-0 absolute w-10' />
            ))}
        </div>
    )
}

export default ImagesTrail