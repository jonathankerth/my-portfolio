import React, { useState } from 'react'
import Image from 'next/image'

const ImageComponent = ({ imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  return (
    <div className="relative w-full mb-4 mt-4 z-10 overflow-hidden">
      <Image
        src={imageUrl}
        alt="images of Jonathan Gallardo-Kerth"
        width={300}
        height={300}
        className="rounded-full cursor-pointer mx-auto transition-transform duration-700 ease-in-out transform hover:scale-150"
        priority
        onClick={handleImageClick}
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default ImageComponent
