//Top Page 
let toPage = document.querySelector(".up-page"); 

window.onscroll = function () {
    if(this.scrollY >= 200){
        toPage.style.marginRight = "0px";
    }else{
        toPage.style.marginRight = "-70px";
    }

}

// scroller
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    el.style.width = `${(scrollTop / height) * 100}%`;
});


// nav bar 
function myFunction() {
    var element = document.getElementById("open");
    element.classList.toggle("open");
}

// tabs
let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
  });
});


// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

        e.preventDefault();

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
            });
        });
    });
}

scrollToSomewhere(allBullets);
