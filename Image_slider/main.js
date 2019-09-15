const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#previous');
const auto = false;
const intervalTime = 5500;
let slideInterval;

function nextSlide(){
  const current = document.querySelector('.current');
  current.classList.remove('current');
  // Check for next slide

  if(current.nextElementSibling){
    current.nextElementSibling.classList.add('current');
  }else{
    slides[0].classList.add('current');
  }

  setTimeout(()=> current.classList.remove('current'));
}

function previousSlide(){
  const current = document.querySelector('.current');
  current.classList.remove('current');
  // Check for next slide

  if(current.previousElementSibling){
    current.previousElementSibling.classList.add('current');
  }else{
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(()=> current.classList.remove('current'));
}

//Button events

next.addEventListener('click', e =>{
  nextSlide()
  if(auto){
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  previousSlide()
    if(auto){
      clearInterval(slideInterval)
      slideInterval = setInterval(nextSlide, intervalTime);
    }
});

//Auto Slide
if(auto){
  slideInterval = setInterval(nextSlide, intervalTime);
}
