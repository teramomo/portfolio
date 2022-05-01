'use strict';

{
  //IntersectionObserver
  const targets = document.querySelectorAll('.photo');
  console.log(targets);

  const callback = (entries, obs) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callback, options);

  ////targetの監視
  targets.forEach(target => {
    observer.observe(target);
  });



  //slider
  const sliders = document.querySelector('.sliders');

const carousel = document.querySelector('.carousel');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

let direction = 0;

prev.addEventListener('click', () => {
  if(direction === -1) {
    sliders.appendChild(sliders.firstElementChild);
  }
  direction = 1;
  carousel.style.justifyContent = 'flex-end';
  sliders.style.transform = 'translate(20%)';
});


next.addEventListener('click', () => {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  sliders.style.transform = 'translate(-20%)';
});

sliders.addEventListener('transitionend', () => {
  if(direction === -1){
    sliders.appendChild(sliders.firstElementChild);
  }else if(direction === 1){
    sliders.prepend(sliders.lastElementChild);
  }

  sliders.style.transition = 'none';
  sliders.style.transform = 'translate(0)';

  setTimeout( ()=> {
    sliders.style.transition = 'all .5s';
  });

});












}