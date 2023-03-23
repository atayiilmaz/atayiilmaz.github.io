/* hide navbar script */

var togglebtn= document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelector(".navlinks li");


togglebtn.addEventListener("click",function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

/* using typed.js library, added animated header. */
var typed = new Typed(".input",{
    strings:["Software Developer", "Backend Developer", "Web Developer"],
    typedSpeed:60,
    backSpeed:55,
    loop:true
})