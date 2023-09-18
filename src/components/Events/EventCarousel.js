import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const EventCarousel = ({ modalData }) => {
  return (
    <div className="w-[30rem] max-h-[20rem] smM:max-h-[15rem] smM:w-full overflow-hidden rounded-lg">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        transitionTime={500}
      >
        {modalData.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-[30rem] max-h-[20rem] object-contain"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default EventCarousel;
