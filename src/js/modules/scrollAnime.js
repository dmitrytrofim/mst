class ScrollAnime {
 constructor(animeElems) {
  this.animeElems = animeElems;
 }
 animeScroll() {
  const callback = (entries, observer) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting) {
     if (entry.intersectionRatio > 0.3) {
      entry.target.classList.add('j-anime');
      observer.unobserve(entry.target);
     }
    }
   });
  };

  const options = {
   rootMargin: '0px',
   threshold: 0.3,
  };

  const observer = new IntersectionObserver(callback, options);

  this.animeElems.forEach((elem) => observer.observe(elem));
 }
 start() {
  if (this.animeElems[0]) this.animeScroll();
 }
}

export default ScrollAnime;
