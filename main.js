var menuItem = document.querySelectorAll(".menu-item");

menuItem.forEach((e) =>
  e.addEventListener("click", () => {
    let j = 0;
    while (j < menuItem.length) {
      menuItem[j].className = "menu-item";
      j++;
    }
    e.className = "menu-item active";
  })
);

var downClasp = document.getElementsByClassName("menu-link");
var i;
for (i = 0; i < downClasp.length; i++) {
  downClasp[i].addEventListener("click", function () {
    const a = this.nextElementSibling;
    a.classList.toggle("show");
    const pr = this.previousElementSibling;
  });
}



var ros=document.querySelectorAll('.icon-down');
ros.forEach(r=>r.addEventListener('click',()=>{
    // let j=0;
    // while(j<ros.length){
    //   ros[j].className='icon-down'
    //   j++;
    // }
    r.classList.toggle('rotate')
}))


var onTong = document.querySelector(".ontogge");

var downUl = document.querySelector(".down-ul");
var containerLeft = document.querySelector(".container-left");
onTong.addEventListener("click", () => {
  containerLeft.classList.toggle("active");
});
