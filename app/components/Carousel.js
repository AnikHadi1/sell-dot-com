"use client";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Carousel({ image }) {
  const zoomInProperties = {
    scale: 0.4,
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    indicators: true,
    arrows: true,

    prevArrow: (
      <div className="ml-10 top-40 md:top-72">
        <FaArrowLeft className="h-8 w-8 text-black cursor-pointer" />
      </div>
    ),
    nextArrow: (
      <div className="mr-10 top-40 md:top-72">
        <FaArrowRight className="h-8 w-8 text-black cursor-pointer" />
      </div>
    ),
  };

  return (
    <div className="w-full slide-container">
      <Zoom {...zoomInProperties}>
        {image.map((im, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center w-full "
            >
              <Image
                className="pointer-events-none"
                alt={`carousel-image-${index}`}
                src={im.image}
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </Zoom>
    </div>
  );
}

export default Carousel;
