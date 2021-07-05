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
  



const portfolioArray = [
  {
    title:'Henry`s Kitchen',
    img:'./assets/img/henryskitchen.png',
    link: 'https://henrys-kitchen.vercel.app'
  },
  {
    title:'Calculator App',
    img:'https://raw.githubusercontent.com/Germanchrystan/Calculator/main/design/desktop-design-theme-1.jpg',
    link:'https://germanchrystan.github.io/Calculator/'
  },
  {
    title:'Weather Network',
    img:'./assets/img/weather.png',
    link:'https://weather-network-alpha.vercel.app/'
  }
]

