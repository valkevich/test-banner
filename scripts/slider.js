new Swiper('.slider', {
    spaceBetween: 5,
    initialSlide: 1,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});
