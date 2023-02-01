$(document).ready(function () {
  $(".main_carousel").owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    navText: [
      '<span><i class="fa-solid fa-chevron-left"></i>Presvious</span>',
      '<img src="assets/img/Home_carouselimg1.png" alt="">',
      " ",
      '<img src="assets/img/Home_carouselimg2.png" alt="">',
      '<span>Next<i class="fa-solid fa-chevron-right"></i></span>',
    ],
    navText: [
      '<span><i class="fa-solid fa-chevron-left"></i>Presvious</span>',
      '<img src="assets/img/Home_carouselimg1.png" alt="">',
      " ",
      '<img src="assets/img/Home_carouselimg2.png" alt="">',
      '<span>Next<i class="fa-solid fa-chevron-right"></i></span>',
    ],
    dot: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 1,
      },
    },
  });
});
