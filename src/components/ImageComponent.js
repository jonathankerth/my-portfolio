import React, { useState } from 'react'
import Image from 'next/image'

const ImageComponent = ({ imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImageClick = () => {
    setIsZoomed(!isZoomed)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleImageClick()
    }
  }

  return (
    <div
      className="relative w-full mb-4 mt-4 z-10 overflow-hidden"
      role="button"
      tabIndex={0}
      onClick={handleImageClick}
      onKeyDown={handleKeyDown}
      aria-label={isZoomed ? 'Click to zoom out photo of Jonathan' : 'Click to zoom in photo of Jonathan'}
    >
      <Image
        src={imageUrl}
        alt="Photo of Jonathan Gallardo-Kerth"
        width={300}
        height={300}
        className={`rounded-full cursor-pointer mx-auto transition-transform duration-700 ease-in-out transform ${
          isZoomed ? 'scale-150' : 'hover:scale-150'
        }`}
        loading="lazy"
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default ImageComponent
