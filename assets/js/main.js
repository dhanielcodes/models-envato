//BACKGROUND SWITCH
$(document).ready(function(){
    $('.color-changer').on('click', function(){
        $('body').toggleClass("switch")
    })
})
$(document).ready(function(){
    $('.color-changer').on('click', function(){
        $('nav ul li a').toggleClass("switch")
    })
})
$(document).ready(function(){
    $('.color-changer').on('click', function(){
        $('.color-changer').toggleClass("switch")
    })
})
$(document).ready(function(){
    $('.color-changer').on('click', function(){
        $('.featured button').toggleClass("switch")
    })
})
$(document).ready(function(){
    $('.color-changer').on('click', function(){
        $('.burger span').toggleClass("switch")
    })
})

let changeColor =  document.querySelector('.color-changer')
let body =  document.querySelector('body')

changeColor.addEventListener('click',() => {
    if(body.className == ""){
        changeColor.innerHTML = "Light"
    }
    else{
        changeColor.innerHTML = "Dark"
    }
})
//FOR BURGER NAVIGATION
$(document).ready(function(){
    $('.burger').on('click', function(){
        $('body').toggleClass("open")
    })
})
$(document).ready(function(){
    $('.burger').on('click', function(){
        $('.links').toggleClass("open")
    })
})
$(document).ready(function(){
    $('.burger').on('click', function(){
        $(this).toggleClass("open")
    })
})
//FOOTER LINK DROP DOWN
$(document).ready(function(){
    $('.po:nth-child(1)').on('click', function(){
        $('.po:nth-child(1)').toggleClass("open")
        $('footer .contact .b:nth-child(1)').toggleClass("open")
    })
})
$(document).ready(function(){
    $('.po:nth-child(2)').on('click', function(){
        $('footer .pages').toggleClass("open")
        $('footer .pages .b:nth-child(1)').toggleClass("open")
    })
})
$(document).ready(function(){
    $('.po:nth-child(3)').on('click', function(){
        $('footer .services').toggleClass("open")
        $('footer .services .b:nth-child(1)').toggleClass("open")
    })
})


//MODELS DISPLAY TOGGLE ON SMALLER SCREENS
$(document).ready(function(){
    $('.featured button').on('click', function(){
        $('.feat-imgs').toggleClass("open")
    })
})


let imgs = document.querySelector('.feat-imgs')
let showBtn = document.querySelector('.featured button')


showBtn.addEventListener('click',() => {
    if(imgs.className == "feat-imgs"){
        showBtn.innerHTML = "Show Less"
    }
    else{
        showBtn.innerHTML = "Show More"
    }
})
//ANIMATIONS
gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline()

//HEADER ANIMATION
gsap.from('.header', {
    scrollTrigger: {
        trigger: '.sponsors',
        snap: 1
    },
})
tl.to('.slider', 1,{
    y: "-100%",
    stagger: 0.4
})
.from('.drop', 1,{
    y: -50,
    opacity: 0,
    stagger: 0.4
})
.from('.header-display_images', 1,{
    x: -100,
    opacity: 0
})
.from('.logo', 1,{
    opacity: 0,
    y: "-100%",
    ease: 'bounce.out(1, 1.3)'
})
.from('.links', 1,{
    opacity: 0,
})
.from('.burger', 1,{
    opacity: 0,
    y: "-100%",
    ease: 'bounce.out(1, 1.3)'
}, "-=2")
.from('.color-changer', 1, {
    x: '-200%'
}, "-=2")


//SPONSORS ANIMATION

gsap.from('.sponsors img', 1, {
    scrollTrigger: {
        trigger: '.sponsors',
        toggleActions: 'restart none none none',
        start: 'center bottom'
    },
    y: -10,
    opacity: 0,
    stagger: 0.4
},)
//WELCOME ANIMATIONS
gsap.from('.welcome', {
    scrollTrigger: {
        snap: 1,
        trigger: '.welcome'
    },
})
gsap.from('.drop2', 1,{
    scrollTrigger:{
        trigger: '.welcome',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
gsap.from('.welcome_img', 2, {
    scrollTrigger:{
        trigger: '.welcome',
        toggleActions: 'restart none none none',
        start: 'top center'
    },
    x: "-200%",
    delay: 5

})
gsap.from('.welcome .img', 1,{
    scrollTrigger:{
        trigger: '.welcome',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    rotate: '360',
    stagger: 0.3
})
//PROFESSIONAL ANIMATION
gsap.from('.proff', {
    scrollTrigger: {
        snap: 1,
        trigger: '.proff'
    },
})
gsap.from('.drop3', 1,{
    scrollTrigger:{
        trigger: '.proff',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
gsap.from('.professional_img', 2, {
    scrollTrigger:{
        trigger: '.proff',
        toggleActions: 'restart none none none',
        start: 'top bottom'
    },
    x: "200%",
    delay: 5

})
gsap.from('.professional .img', 1,{
    scrollTrigger:{
        trigger: '.professional',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    rotate: '360',
    stagger: 0.3
})
//FEATURED MODELS ANIMATION
gsap.from('.featured', {
    scrollTrigger: {
        snap: 1,
        trigger: '.featured'
    },
})
gsap.from('.drop4', 1,{
    scrollTrigger:{
        trigger: '.featured',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
gsap.from('.feat-img', 1,{
    scrollTrigger:{
        trigger: '.featured',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
//QUALITY ANIMATION
gsap.from('.quality', {
    scrollTrigger: {
        snap: 1,
        trigger: '.quality'
    },
})
gsap.from('.quality_img', 1, {
    scrollTrigger:{
        trigger: '.quality',
        toggleActions: 'restart none none none'
    },
    x: "-20%",
    opacity: 0
})
gsap.from('.drop5', 1,{
    scrollTrigger:{
        trigger: '.quality',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
//BLOG ANIMATION
gsap.from('.blog', {
    scrollTrigger: {
        snap: 1,
        trigger: '.blog'
    },
})
gsap.from('.drop6', 1,{
    scrollTrigger:{
        trigger: '.blog',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
gsap.from('.peeps', 1,{
    scrollTrigger:{
        trigger: '.blog',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
//EMAIL ANIMATION
gsap.from('.email', {
    scrollTrigger: {
        snap: 1,
        trigger: '.email'
    },
})
gsap.from('.drop7', 1,{
    scrollTrigger:{
        trigger: '.email',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})
gsap.from('.email .img', 1,{
    scrollTrigger:{
        trigger: '.email',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    rotate: '360',
    stagger: 0.3
})
//FOOTER ANIMATIONS
gsap.from('.logo-socials', 1, {
    scrollTrigger:{
        trigger: 'footer',
        toggleActions: 'restart none none none',
    },
    x: -50,
    opacity:0
})
gsap.from('.po', 1,{
    scrollTrigger:{
        trigger: 'footer',
        toggleActions: 'restart none none none'
    },
    y: -50,
    opacity: 0,
    stagger: 0.3
})