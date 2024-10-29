function initializeSwiper() {
    return new Swiper(".portfolio-swiper", {
        slidesPerView: window.innerWidth < 768 ? 1 : 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
}

let swiper = initializeSwiper();

window.addEventListener("resize", () => {
    if (swiper) swiper.destroy();
    swiper = initializeSwiper();
});
