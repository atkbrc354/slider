const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}


const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}


const prepaerCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}


const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepaerCurrentSlide(index);
    }else{
        index++;
        prepaerCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepaerCurrentSlide(index);
    }else{
        index--;
        prepaerCurrentSlide(index);
    }
}


 
let timer = setInterval(function() {
    if(index == slides.length - 1){
        index = 0;
        prepaerCurrentSlide(index);
    } else {
        index++;
        prepaerCurrentSlide(index);
    }
},2000);
    
    
  


dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepaerCurrentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

