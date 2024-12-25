var typed = new Typed('#text',{
    strings:['Developer.','Designer'],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
});

// SHOW SKILLS
let skillBtn = document.querySelector('.skill_btn')
let skillDet = document.querySelector('.about_bottom')


skillBtn.addEventListener('click',() =>{
    skillDet.classList.toggle('show_skills');


});
// sticky_nav

let nav = document.querySelector('nav');

window.addEventListener('scroll',() =>{
    if(window.scrollY > 100){
        nav.classList.add('sticky_nav');
    }
    else{
        nav.classList.remove('sticky_nav')
    }

});

// text swiper slider
var swiper = new Swiper('.testSwiper',{
    slidesPerView:1,
    loop:true,
    autoplay:true,

});

// filters



// blogs swiper slider
var swiper = new Swiper('blogSwiper',{
    slidesPerView:2,
    sapceBetween:30,
    loop:true,
    autoplay:true,
    breakpoints:{
        1200:{
            sildesPerView:1,
            sapceBetween:10,
        },
        900:{
            sildesPerView:1,
            sapceBetween:10,
        },
        500:{
            sildesPerView:1,
            sapceBetween:10,
        },
    },

});

// show nav
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');

bar.addEventListener('click',() =>{
    menu.classList.toggle('show_nav');
});