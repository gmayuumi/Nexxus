document.addEventListener("DOMContentLoaded", function() {

    new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
    });

    new Swiper('.testimonials-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
        }
    });

    const productSwipers = document.querySelectorAll('.products-swiper');
    productSwipers.forEach(swiperEl => {
        new Swiper(swiperEl, {
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 15,
            centeredSlides: true,
            navigation: {
                nextEl: swiperEl.querySelector('.swiper-button-next'),
                prevEl: swiperEl.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                576: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
                768: { slidesPerView: 3, spaceBetween: 30, centeredSlides: false },
                1200: { slidesPerView: 4, spaceBetween: 30, centeredSlides: false }
            }
        });
    });

    const navbar = document.querySelector('.navbar');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const categoriesToggle = document.getElementById('mobile-categories-toggle');
    const mobileSubmenu = document.getElementById('mobile-submenu');

    function closeMenu() {
        mobileMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
        if (mobileSubmenu.classList.contains('open')) {
            mobileSubmenu.classList.remove('open');
            categoriesToggle.classList.remove('open');
        }
    }

    hamburgerBtn.addEventListener('click', () => {
        const isMenuOpen = mobileMenu.classList.contains('active');
        if (isMenuOpen) {
            closeMenu();
        } else {
            mobileMenu.classList.add('active');
            hamburgerBtn.classList.add('active');
            menuOverlay.classList.add('active');
        }
    });

    menuOverlay.addEventListener('click', closeMenu);
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    categoriesToggle.addEventListener('click', (e) => {
        e.preventDefault();
        mobileSubmenu.classList.toggle('open');
        categoriesToggle.classList.toggle('open');
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (scrollTop > lastScrollTop && scrollTop > 200) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

});

const phoneNumber = "5511999998888"; 

function buyWhatsApp(productName, productPrice) {
    const message = `Olá, Nexxus AutoCare! Tenho interesse no produto: *${productName}* (${productPrice}). Poderia me ajudar a finalizar a compra?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

function openGeneralWhatsApp() {
    const message = "Olá, Nexxus AutoCare! Gostaria de fazer um orçamento e tirar algumas dúvidas sobre seus produtos para estética automotiva.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}