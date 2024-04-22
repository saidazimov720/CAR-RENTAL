const page = document.getElementById('page'),
    loading = document.getElementById('loading'),
    slider = document.querySelector('.swiper'),
    inner1 = document.getElementById('inner-1'),
    inner2 = document.getElementById('inner-2'),
    inner3 = document.getElementById('inner-3'),
    car = document.querySelector('model-viewer'),
    slideToButtons = document.querySelectorAll('[data-slide-to]'),
    colorButtons = document.querySelectorAll('[data-color]'),
    title = document.querySelectorAll('.title'),
    bgImage = document.querySelector('picture');
    
const innerAnimationActive = {
    duration: 1,
    delay: 0.5,
    ease: Power4.easeOut,
    autoAlpha: 1,
    yPercent: 0,
};

const innerAnimationHidden = {
    duration: 1, 
    ease: Power4.easeOut, 
    autoAlpha: 0, 
    yPercent: -20,
};

const swiper = new Swiper(slider, {
    direction: 'vertical',
    speed: 1500,
    grabCursor: true,
    touchRatio: 2,
    threshold: 1,
    preventInteractionOnTransition: true,
    mousewheel: {
      forceToAxis: true,
    },
    keyboard: {
      enabled: true,
    },
    on: {
        init: () => {
          
          gsap.to(slider, {
            duration: 1,
            ease: Power4.easeOut,
            autoAlpha: 1,
          });
          gsap.to(title, innerAnimationActive);

          title.forEach(function (e, i) {
            let row_width = e.getBoundingClientRect().width;
            let row_item_width = e.children[0].getBoundingClientRect().width;
            let offset = ((2 * row_item_width) / row_width) * 100 * -1;
            let duration = 30 * (i + 1);
    
            gsap.set(e, {
              xPercent: 0
            });
    
            gsap.to(e, {
              duration: duration,
              ease: "none",
              xPercent: offset,
              repeat: -1
            });
          });
        }
      },
})

car.addEventListener('load', (Event) => {
    gsap.to(loading, {
        duration: 1,
        ease: Power4.easeOut,
        autoAlpha: 0,
    });

    const materials = car.model.materials,
    paint = materials[10];
    paint.pbrMetallicRoughness.setBaseColorFactor('#CBD5E1');
    const exposure1 = '1',
        orbit1 = '0deg 50deg 50%',
        exposure2 = '0.4',
        orbit2 = '-60deg 60deg 50%',
        exposure3 = '1',
        orbit3 = '44deg 83deg 50%';
  let target1,
      target2,
      target3;
})