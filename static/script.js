

 //scroll animation
 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else {
      entry.target.classList.remove("show");
    }
  })
},
{
  threshold: 0.5
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const scrollTracker = document.querySelector(".scroll-tracker");

document.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = scrollTop / scrollHeight;

  scrollTracker.style.transform = `scaleX(${scrollProgress})`; 
});

const registerSwitch = document.getElementById('register');
const glass_container = document.getElementById('glass_container');
const loginSwitch = document.getElementById('login');

$(window).on("load", function(){
  $(".loadScene").fadeOut("slow")
});

registerSwitch.addEventListener('click', function() {
  glass_container.classList.add('active');
});

loginSwitch.addEventListener('click', function() {
  glass_container.classList.remove('active');
});

