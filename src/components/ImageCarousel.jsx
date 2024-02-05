import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // Requires a CSS import for styling
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
  }

  return (
    <div className="flex justify-center items-center w-full h-full p-4 rounded-lg bg-white bg-opacity-40">
      <Carousel {...carouselProps}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={375}
              className="rounded-lg"
              objectFit="contain"
              layout="responsive"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
