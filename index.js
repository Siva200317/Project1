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

