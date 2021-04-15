      
        //scrollheader
        window.onscroll = function() {scrollFunction()};

         function scrollFunction() {
         
             document.getElementById("textbox").style.top = "0";
           
         }


         //hamburger menu

let menuToggler = document.querySelector(".nav__button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});

       //slideshow
          var slideIndex = 0; 
                    showSlides();
                    
                    function showSlides() {
                      var i;
                      var slides = document.getElementsByClassName("mySlides");
                      var dots = document.getElementsByClassName("dot");
                      for (i = 0; i < slides.length; i++) {
                        slides[i].style.display = "none";  
                      }
                      slideIndex++;
                      if (slideIndex > slides.length) {slideIndex = 1}    
                      for (i = 0; i < dots.length; i++) {
                        dots[i].className = dots[i].className.replace(" active", "");
                      }
                      slides[slideIndex-1].style.display = "block";  
                      dots[slideIndex-1].className += " active";
                      setTimeout(showSlides, 4000); // Change image every 2 seconds
                    }
          
           //album
         function album1() {   
          
          document.getElementById("isac").style.display = "block"; 
          
          document.getElementById("isac").style.width = "100%"; 
          document.getElementById("disco").style.backgroundColor = "rgb(46, 46, 46)";  
          document.getElementById("albumRow").style.display = "none";
        
                    } 
                    function forsvinn() {   
      
      document.getElementById("isac").style.display = "none"; 
 
      document.getElementById("disco").style.backgroundColor = "rgb(46, 46, 46)";
      document.getElementById("albumRow").style.display = "inline-block"; 
    
                } 
                 //album2
      function album2() {   

          document.getElementById("isac2").style.display = "block"; 
          
          document.getElementById("isac2").style.width = "100%"; 
          document.getElementById("disco").style.backgroundColor = "rgb(46, 46, 46)"; 
          document.getElementById("albumRow").style.display = "none"; 
                   
        
                    } 
                    function forsvinn2() {   
      
      document.getElementById("isac2").style.display = "none"; 
 
      document.getElementById("disco").style.backgroundColor = "rgb(46, 46, 46)";
      document.getElementById("albumRow").style.display = "inline-block"; 
    
  } 



  //Videos
  const state = {};
  const carouselList = document.querySelector(".carousel__list");
  const carouselItems = document.querySelectorAll(".carousel__item");
  const elems = Array.from(carouselItems);

  // next and previous buttons consts
  const arrowLeft = document.querySelectorAll(".arrow__left");
  const arrowRight = document.querySelectorAll(".arrow__right");

  carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest(".carousel__item");

    if (!isItem || newActive.classList.contains(".carousel__item_active")) {
      return;
    };

    update(newActive);
  });

  const update = function(newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove(".carousel__item_active");

    [current, prev, next, first, last].forEach(item => {
      var itemPos = item.dataset.pos;

      item.dataset.pos = getPos(itemPos, newActivePos)
    });
  };

  const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
      return -current
    }

    return diff;
  }

                      
//Pictures
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  var lastned = document.getElementById("lastned");
  lastned.href= imgs.src;
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;

  expandImg.parentElement.style.display = "block";

  document.getElementById("supercontainer").style.display="none";
}
function steng(){
  //var expandImg = document.getElementById("expandedImg");
  //expandImg.parentElement.style.display='none'
  document.getElementById("supercontainer").style.display="block";
  document.getElementById("container").style.display="none";

} 
