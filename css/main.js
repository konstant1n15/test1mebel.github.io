const swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const onTop = document.querySelector('.top');
window.addEventListener('scroll', e => {
  let clientHeight = window.innerHeight;
  let windowHeight = window.scrollY;
  if (windowHeight > clientHeight) {
    onTop.style.opacity = '1';
  } else {
    onTop.style.opacity = '0';
  }
});
onTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
