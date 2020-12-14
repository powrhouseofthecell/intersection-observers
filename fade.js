let options = {
   rootMargin: '0px',
   threshold: 0.3,
};
let callback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.style.animation = 'op 2s ease-out 0s 1 running';
         entry.target.style.opacity = 1;
      } else {
         console.log('none');
      }
   });
};
let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.first');
targets.forEach((target) => {
   observer.observe(target);
});

let callback2 = (entries, observer2) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.style.animation = 'op2 2s ease-out 0s 1 running';
         entry.target.style.opacity = 1;
      } else {
         console.log('none');
      }
   });
};
let observer2 = new IntersectionObserver(callback2, options);

let targets2 = document.querySelectorAll('.second');
targets2.forEach((target) => {
   observer2.observe(target);
});
