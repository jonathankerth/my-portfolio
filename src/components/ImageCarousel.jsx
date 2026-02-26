import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6217.jpeg',
      alt: 'Jonathan enjoying outdoor activities',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6050.jpeg',
      alt: 'Jonathan exploring nature and travel',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4902.jpeg',
      alt: 'Jonathan at a scenic location',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4068.jpeg',
      alt: 'Jonathan spending time with friends',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/sid+and+J+selfie.jpeg',
      alt: 'Jonathan and Sid taking a selfie together',
    },
  ]

  const carouselProps = {
    infiniteLoop: true,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    stopOnHover: true,
    transitionTime: 500,
    swipeable: true,
    dynamicHeight: true,
    renderArrowPrev: (onClickHandler, hasPrev) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          aria-label="Previous image"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-2 rounded-full z-10 border border-black/10"
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>
      ),
    renderArrowNext: (onClickHandler, hasNext) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          aria-label="Next image"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 text-black p-2 rounded-full z-10 border border-black/10"
        >
          <span aria-hidden="true">&rsaquo;</span>
        </button>
      ),
  }

  return (
    <div className="flex justify-center items-center p-4 rounded-lg bg-white bg-opacity-40 w-full" role="region" aria-label="Photo carousel">
      <Carousel {...carouselProps} className="w-full">
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center w-full">
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '0',
                paddingBottom: '75%',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="rounded-lg"
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
