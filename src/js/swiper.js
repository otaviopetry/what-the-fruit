var heroSwiper = new Swiper('.hero-unit .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    autoplay: {
        delay: 4000
    },
    stopOnLastSlide: true,
    disableOnInteraction: true,
    effect: 'fade',

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

var featuredProductSwiper = new Swiper('.product-gallery .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'cube',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })