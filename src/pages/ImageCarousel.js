import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from '../styles/Carousel.module.css' // Adjust the path to your CSS file
import Image from 'next/image'

const ImageCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        stopOnHover={false}
        transitionTime={500}
      >
        <div className={styles.imageWrapper}>
          <Image src="/IMG_0318.jpeg" alt="Image 1" width={300} height={200} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/IMG_4068.jpeg" alt="Image 2" width={300} height={200} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/IMG_4902.jpeg" alt="Image 3" width={600} height={400} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/IMG_6050.jpeg" alt="Image 4" width={300} height={200} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src="/IMG_6217.jpeg" alt="Image 5" width={300} height={200} />
        </div>
      </Carousel>
    </div>
  )
}

export default ImageCarousel
