      
        //scrollheader
        window.onscroll = function() {scrollFunction()};

         function scrollFunction() {
         
             document.getElementById("textbox").style.top = "0";
           
         }
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
                       

//Pictures
var gallery = document.querySelector('.gallery');
var galleryItems = document.querySelectorAll('.gallery-item');
var numOfItems = gallery.children.length;
var itemWidth = 23; // percent: as set in css

var featured = document.querySelector('.featured-item');

var rightBtn = document.querySelector('.move-btn.left');
var leftBtn = document.querySelector('.move-btn.right');
var leftInterval;
var rightInterval;

var scrollRate = 0.2;
var left;
if(document.getElementById("lukke").clicked == true)
{
   alert("button was clicked");
   
}

function selectItem(e) {
	if (e.target.classList.contains('active')) return;
	
	featured.style.backgroundImage = e.target.style.backgroundImage;
	
	for (var i = 0; i < galleryItems.length; i++) {
		if (galleryItems[i].classList.contains('active'))
			galleryItems[i].classList.remove('active');
	}
	document.getElementById("feature").style.display = 'block';
	e.target.classList.add('active');
    
}
function lukk(){
    alert("button was clicked");
}

function galleryWrapLeft() {
	var first = gallery.children[0];
	gallery.removeChild(first);
	gallery.style.left = -itemWidth + '%';
	gallery.appendChild(first);
	gallery.style.left = '0%';
}

function galleryWrapRight() {
	var last = gallery.children[gallery.children.length - 1];
	gallery.removeChild(last);
	gallery.insertBefore(last, gallery.children[0]);
	gallery.style.left = '-23%';
}

function moveLeft() {
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left > -itemWidth) {
			left -= scrollRate;
		} else {
			left = 0;
			galleryWrapLeft();
		}
	}, 1);
}

function moveRight() {
	//Make sure there is element to the leftd
	if (left > -itemWidth && left < 0) {
		left = left  - itemWidth;
		
		var last = gallery.children[gallery.children.length - 1];
		gallery.removeChild(last);
		gallery.style.left = left + '%';
		gallery.insertBefore(last, gallery.children[0]);	
	}
	
	left = left || 0;

	leftInterval = setInterval(function() {
		gallery.style.left = left + '%';

		if (left < 0) {
			left += scrollRate;
		} else {
			left = -itemWidth;
			galleryWrapRight();
		}
	}, 1);
}

function stopMovement() {
	clearInterval(leftInterval);
	clearInterval(rightInterval);
}

leftBtn.addEventListener('mouseenter', moveLeft);
leftBtn.addEventListener('mouseleave', stopMovement);
rightBtn.addEventListener('mouseenter', moveRight);
rightBtn.addEventListener('mouseleave', stopMovement);


//Start this baby up
(function init() {
	var images = [
  'Images/victoria_med.jpeg',
   'Images/Orchestra13.JPG',
    'Images/Orchestra15.JPG',
    'Images/GI 15.jpeg',
    'Images/gio_med.jpg',
      'Images/GIOband.jpg',
     'Images/Orchestra14.JPG'
	];
	
	//Set Initial Featured Image
	featured.style.backgroundImage = 'url(' + images[0] + ')';
	
	//Set Images for Gallery and Add Event Listeners
	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.backgroundImage = 'url(' + images[i] + ')';
		galleryItems[i].addEventListener('click', selectItem);
	}
})();
