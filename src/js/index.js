import "./import/modules";
import "./import/components";

// слайдер
new Swiper('.slider-review',{
    // grabCursor: true,
    // spaceBetween: 70,
    // // centeredSlides: true,
    // loop: true,
    // loopedSlides: 3,
    // // почемуто не работает в правую сторону
    // centeredSlides: true,
    // slidesPerView: 2.5,
    // speed: 500,

    // пробую настроить брейкпоиинты
    breakpoints: {
        769:{
            grabCursor: true,
            spaceBetween: 70,
            centeredSlides: true,
            loop: true,
            // loopedSlides: 1,
            // почемуто не работает в правую сторону
            slidesPerView: 2.5,
            speed: 500,
            
            grid: { fill: 'row', rows: 1,},
            // speceBetween: 50,
        },
        0:{


            grid: { fill: 'row', rows: 3,},
            // speceBetween: 30,
        }
    }
});
// всплывающая форма

// // слайдер
// new Swiper('.slider-review',{
//     grabCursor: true,
//     spaceBetween: 70,
//     // centeredSlides: true,
//     loop: true,
//     // loopedSlides: 1,
//     // почемуто не работает в правую сторону
//     centeredSlides: true,
//     slidesPerView: 2.5,
//     speed: 500,

//     // пробую настроить брейкпоиинты
//     // breakpoints: {
//     //     768:{
//     //         slidesPerView: 2
//     //     }
//     // }