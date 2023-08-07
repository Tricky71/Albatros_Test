'use strict';


document.addEventListener('DOMContentLoaded', function() {
  
  // Audio 
  const audioContainer = document.querySelector('.audio__bottom');
  const audioButtonsBlock = document.querySelector('.audio__icons');
  const audioButtons = document.querySelectorAll('.audio__button');
  
  const createAudioElement = (n) => {
    return (
      `<audio controls="controls" 
      src="https://astro7.ru/images/newsletter/mail/2023/temporary/retro-eclipse/${n}.mp3" 
      type="audio/mp3"></audio>`
    )
  }

  const render = (container, template, place = "afterbegin") => {
    container.insertAdjacentHTML(place, template);
  };

  const remove = (container) => {
    const element = container.querySelector('audio');
    element.remove();
  }

  audioButtonsBlock.addEventListener('click', (evt) => {
    const target = evt.target;
    if (target && target.classList.contains('audio__button')) {
      audioButtons.forEach((e) => {
        e.classList.remove('audio__button--active')
      });
      target.classList.add('audio__button--active');
      remove(audioContainer);
      render(audioContainer, createAudioElement(target.getAttribute('data-sign')));
    }
  });

  // Slick settings

  $('.audio__icons').slick({
    slidesToShow: 11,
    arrows: false,
    mobileFirst: true,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 12,
        respondTo: 'min'
      }
    }]
  });

  $('.reviews__list').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [{
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
      }
      },{
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3,
        respondTo: 'window',
        // appendArrows: '.slick-arrows',
        prevArrow: '<svg class="slick-arrow slick-arrow--left" height="30" width="45"><use xlink:href="img/svg/sprite/sprite.svg#arrow-left"></use></svg>',
        nextArrow: '<svg class="slick-arrow slick-arrow--right" height="30" width="45"><use xlink:href="img/svg/sprite/sprite.svg#arrow-right"></use></svg>',
      }}
    ]
  });

  render(audioContainer, createAudioElement(1));

  // Slider dots and arrows

  const sliderDotsContainer = document.querySelector('.slick-dots');
  const sliderDotsList = sliderDotsContainer.querySelectorAll('li');
  const reviewsBlock = document.querySelector('.reviews__list');
  const leftArrow = reviewsBlock.querySelector('.slick-arrow--left');
  const rightArrow = reviewsBlock.querySelector('.slick-arrow--right');
  
  leftArrow.classList.add('slick-arrow--inactive');

  reviewsBlock.addEventListener('click', (evt) => {
    let target = evt.target;
    if (target.tagName = 'svg') {
     if (sliderDotsList[0].classList.contains('slick-active')) {
        leftArrow.classList.add('slick-arrow--inactive');
      } else {
        leftArrow.classList.remove('slick-arrow--inactive');
      }
      if (sliderDotsList[sliderDotsList.length - 1].classList.contains('slick-active')) {
        rightArrow.classList.add('slick-arrow--inactive');
      } else {
        rightArrow.classList.remove('slick-arrow--inactive');
      }
    }
  });
})













