import React, { useState, useEffect } from 'react';
import { Box, Flex, Image, IconButton } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa6';
import { FaChevronLeft } from 'react-icons/fa6';

const ImageCarousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000; // Change slides every 5 seconds (adjust as needed)
  let intervalId;

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === (images?.length ? images.length - 1 : 0)
        ? 0
        : prevSlide + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0
        ? images?.length
          ? images.length - 1
          : 0
        : prevSlide - 1,
    );
  };

  const startSlideShow = () => {
    intervalId = setInterval(() => {
      nextSlide();
    }, slideInterval);
  };

  const stopSlideShow = () => {
    clearInterval(intervalId);
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, [currentSlide]);

  return (
    <Box textAlign="center" mt={12}>
      <Flex justify="center" align="center">
        <IconButton
          aria-label="Previous Slide"
          icon={<FaChevronLeft />}
          onClick={prevSlide}
          mr={3}
        />
        {images && images.length > 0 && (
          <Image
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            w="400px"
            h="300px"
            mx={2}
          />
        )}
        <IconButton
          aria-label="Next Slide"
          icon={<FaChevronRight />}
          onClick={nextSlide}
          ml={3}
        />
      </Flex>
    </Box>
  );
};

export default ImageCarousel;
