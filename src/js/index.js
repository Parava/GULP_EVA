import "./import/modules";
import "./import/components";

// слайдер
new Swiper('.slider-review',{
    grabCursor: true,
    spaceBetween: 70,
    // centeredSlides: true,
    loop: true,
    // loopedSlides: 1,
    // почемуто не работает в правую сторону
    centeredSlides: true,
    slidesPerView: 2.5,
    speed: 500,
});
// всплывающая форма