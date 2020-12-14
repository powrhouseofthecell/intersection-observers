let options = {
   rootMargin: '0px',
   threshold: 0.3,
};
let callback = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         entry.target.style.animation = 'progress 2s ease-out 0s 1 running';
         entry.target.style.opacity = 1;
      } else {
         console.log('none');
      }
   });
};
let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.progress');
targets.forEach((target) => {
   observer.observe(target);
});
