'use client'

import React, { useState } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { products } from '../data/carouseldata' // Import the products data
import "../css/embla.css"

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const [likedItems, setLikedItems] = useState({}); // Track liked items by their id

  // Toggle heart color
  const toggleLike = (id) => {
    setLikedItems(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        
        <div className="embla__container">
          {products.map((item, index) => (
            <div className="embla__slide" key={item.id}>
              {/* Heart Icon */}
              
              {/* Image */}
              <img src={item.image} alt={item.name} className="embla__image" />
              {/* Product Name and Price */}
              <div className="embla__text">
                <h3 className="embla__name">{item.name}</h3>
                <p className="embla__price">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
