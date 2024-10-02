// Dark mode / Light mode
let btn=document.getElementById("dark-btn");
    let bdy=document.getElementById("bdy");
    btn.addEventListener("click",function(){
      if(bdy.getAttribute("data-bs-theme")=="dark"){
        bdy.setAttribute("data-bs-theme","light")
        btn.innerHTML="&#9788"
      }
      else{
        bdy.setAttribute("data-bs-theme","dark")
        btn.innerHTML="&#9789"
      }
      
      })

let date = new Date
let year = document.getElementById("copyrights-year")
year.innerHTML = date.getFullYear()


// navbar gsap
var navTL = gsap.timeline()
navTL.from(".brand",{
  y:-20,
  delay : 0.5,
  duration : 1,
  opacity: 0,
})

navTL.from(".nav-item a",{
  y:20,
  duration : 0.5,
  opacity : 0,
  stagger : 0.5
})

gsap.from("#dark-btn",{
  y:-20,
  delay : 0.5,
  duration : 1,
  opacity: 0,
})


// main page gsap
let mainTL = gsap.timeline()
mainTL.from(".first-section .left-content h3",{
  x:-40,
  opacity : 0,
  delay : 0.5,
  duration :0.8
})
mainTL.from(".first-section .left-content h1",{
  x:-40,
  opacity : 0,
  duration :0.8
})
mainTL.from(".first-section .left-content p",{
  x:-40,
  opacity : 0,
  duration :0.8
})
mainTL.from(".first-section .left-content button",{
  scale : 1,
  opacity : 0,
  duration :1
})
mainTL.from(".social-media a",{
  scale : 1,
  opacity : 0,
  duration : 1,
  stagger :0.5 
})
gsap.from(".first-section #my-img1",{
  opacity : 0,
  duration :0.5,
  delay : 3
})



// // about page gsap
gsap.registerPlugin(ScrollTrigger) 
gsap.from(".role",{
  scrollTrigger : {
    trigger : ".role",
  },
  x:100,
  opacity :0,
  scale : 1,
  duration :2,
  delay : 1,
})

// gsap.to("#my-img2", {
//   scrollTrigger: { 
//     trigger: "#my-img2",
//     scrub: true,
//     pin: true,
//   },
//   y: 300,
//   x:500,
//   rotate : 360,
  
// });

// gsap scrollTrigger installation
gsap.registerPlugin(ScrollTrigger) 


// skill page gsap
gsap.from('.skill-left',{
  scrollTrigger  : {
    trigger : ".skill-left",
    scrub : true
  },
  opacity:0,
  x : -150,
  yoyo:true,
  duration: 2,
  stagger :0.5
})

gsap.from('.skill-right',{
  scrollTrigger  : {
    trigger : ".skill-right",
    scrub : true
  },
  opacity:0,
  x : 150,
  yoyo:true,
  duration: 2,
  stagger :0.5 
})


gsap.from('.other-skills',{
  scrollTrigger : {
    trigger : ".other-skills",
    scrub : true,
  },
  opacity: 0,
  scale:2,
  duration : 2,
  stagger : 0.5,
  scrub : true
})



let typeSplit1 = new SplitType('.article1', {
  types: 'lines, words, chars',
})
const chars1 = typeSplit1.chars
gsap.fromTo(
  chars1,
  {
    "will-change": "opacity, transform",
    opacity: 0,
    yPercent: 50
  },
  {
    duration: 1.6,
    opacity: 1,
    yPercent: 0,
    ease: "elastic.out(1.2, 0.5)",
    stagger: {
      each: 0.02
    }
  }
)

let typeSplit2 = new SplitType('.article2', {
  types: 'lines, words, chars',
})
const chars2 = typeSplit2.chars
gsap.fromTo(
  chars2,
  {
    "will-change": "opacity, transform",
    opacity: 0,
    yPercent: 50
  },
  {
    duration: 1.6,
    opacity: 1,
    yPercent: 0,
    ease: "elastic.out(1.2, 0.5)",
    stagger: {
      each: 0.02
    }
  }
)
let typeSplit3 = new SplitType('.article3', {
  types: 'lines, words, chars',
})
const chars3 = typeSplit3.chars
gsap.fromTo(
  chars3,
  {
    "will-change": "opacity, transform",
    opacity: 0,
    yPercent: 50,
    
  },
  
  {
    duration: 1.6,
    opacity: 1,
    yPercent: 0,
    ease: "elastic.out(1.2, 0.5)",
    stagger: {
      each: 0.02
    },
    
  }
)
