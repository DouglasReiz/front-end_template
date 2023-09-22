// Animations using JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");

    hero.style.opacity = "0";

    setTimeout(() => {
        hero.style.transition = "opacity 1s";
 
        hero.style.opacity = "1";
    }, 500);

    document.getElementById("dropDown").addEventListener("click", () => {
      document.querySelector(".drop-down").classList.toggle("drop-down--active");
  });

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    function goToNextSlide() {
      if (swiper.isEnd) {
          swiper.slideTo(0);
      } else {
          swiper.slideNext();
      }
  }

  setInterval(goToNextSlide, 3000);
});





