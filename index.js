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



// gsap.from(".first-section h3", 1, {
//   x : -600
// })
// gsap.from(".first-section h1", 2, {
//   x : -600,
//   delay : .7
// })
// gsap.from(".first-section .h4", 2.4, {
//   x : -600,
//   delay : 1.6
// })
// gsap.from("#my-img1", 2, {
//   x : 600,
//   duration : 2
// })

// gsap.from("#navbarText ul li ", .6, {
//   y :-250,
//   stagger : .6
// })
// gsap.from("#linkedin", .4, {
//   scale : 0,
//   opacity : 0
// })
// gsap.from("#github", .8, {
//   scale : 0,
//   opacity : 0
// })
// gsap.from("#insta", 1.2, {
//   scale : 0,
//   opacity : 0
// })
// gsap.from("#facebook", 1.6, {
//   scale : 0,
//   opacity : 0
// })