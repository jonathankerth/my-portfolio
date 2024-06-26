import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6217.jpeg',
      alt: 'Image 1',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_6050.jpeg',
      alt: 'Image 2',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4902.jpeg',
      alt: 'Image 3',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/IMG_4068.jpeg',
      alt: 'Image 4',
    },
    {
      src: 'https://mypublicucket.s3.us-west-2.amazonaws.com/sid+and+J+selfie.jpeg',
      alt: 'Image 5',
    },
  ]

  const carouselProps = {
    infiniteLoop: true,
    showStatus: false,
    showIndicators: true,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    stopOnHover: true,
    transitionTime: 500,
    swipeable: true,
    dynamicHeight: true,
    renderArrowPrev: (onClickHandler, hasPrev, label) =>
      hasPrev && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        >
          &lsaquo;
        </button>
      ),
    renderArrowNext: (onClickHandler, hasNext, label) =>
      hasNext && (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
        >
          &rsaquo;
        </button>
      ),
  }

  return (
    <div className="flex justify-center items-center p-4 rounded-lg bg-white bg-opacity-40">
      <Carousel {...carouselProps}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <div
              style={{ position: 'relative', width: '500px', height: '375px' }}
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
                priority
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
