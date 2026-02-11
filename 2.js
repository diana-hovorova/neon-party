// ===  ТАЙМЕР ===
const eventDate = new Date('July 15, 2026 12:00:00').getTime();
function updateTimer() {
    const now = new Date().getTime();
    const distance = eventDate - now;
    let seconds = Math.floor(distance / 1000);
    const days = Math.floor(seconds / 86400);
    seconds = seconds % 86400;
    const hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}
setInterval(updateTimer, 1000);
updateTimer();
// ===== БУРГЕР МЕНЮ =====
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('.menu a');
burger.addEventListener('click', function () {
    menu.classList.toggle('open');
});
links.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.remove('open');
    });
});

new Swiper('.mySwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 1,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
const nameInput = document.querySelector('#nameInput');

const nameGroup = document.querySelector('#nameGroup');
  nameInput.addEventListener('invalid', function () {
        nameGroup.classList.add('error');
    });

    const email = document.querySelector('#email');

const emailGroup = document.querySelector('#emailGroup');
  email.addEventListener('invalid', function () {
        emailGroup.classList.add('error');
    });

    nameInput.addEventListener('input', () => {
    nameGroup.classList.remove('error');
});

email.addEventListener('input', () => {
    emailGroup.classList.remove('error');
});