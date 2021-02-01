import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src:
      "https://www.lifewire.com/thmb/VUHHmxZ-OV_0y0lMVKOAHCXdsWo=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/what-is-a-book-exchange-3486662_FINAL-2160aa8be7924a8aa2584733820bd7c6.gif",
    altText: "Slide 1",
  },
  {
    src:
      "https://www.thebostoncalendar.com/system/events/photos/000/265/578/large/Book_Swap.jpg?1556041329",
    altText: "Slide 2",
  },
  {
    src:
      "https://i.pinimg.com/originals/29/8c/1f/298c1f855e4ad96ccd636b1f4496416e.jpg",
    altText: "Slide 3",
  },
];

const CarouselPart = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carImg" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselPart;
