// Navbar Toggle
document.querySelector('#menu-bar').onclick = () => {
    document.querySelector('.navbar').classList.toggle('active');
};

// Search Toggle
document.querySelector('#search').onclick = () => {
    document.querySelector('.search').classList.toggle('active');
};

// Product Swiper
new Swiper(".product-row", {
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".product .swiper-pagination", clickable: true },
    breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
});

// Blogs Swiper
new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".blogs .swiper-pagination", clickable: true },
});

// Review Swiper
new Swiper(".review-row", {
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    pagination: { el: ".review .swiper-pagination", clickable: true },
    breakpoints: { 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
});