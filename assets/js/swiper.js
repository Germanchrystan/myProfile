const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop:false,
    
    effect: 'cube',
    grabCursor:true,
    cubeEffect:{
      shadow:true,
      slideShadow:true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickeable:true,
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
  });
  