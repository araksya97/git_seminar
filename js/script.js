var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 0 +(index + 1) + '</span>';
      },

    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    //   autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    //   },
  });
  var infiniteSwiper = new Swiper ('.js-infinite-slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    speed: 5000,
    loop: true,
    autoplay: {
      delay: 0
    },
    breakpoints: {
      400: {
        slidesPerView: 3
      },
      550: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 5
      },
      1000: {
        slidesPerView: 6
      }
    }
  });

$('.nav_btn').on('click', function() {
    $('.nav_menu').toggleClass('active')
    $('.fixed_nav').toggleClass('active')
    $('.body_act').toggleClass('active')
});