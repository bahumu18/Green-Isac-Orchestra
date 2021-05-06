//scrollheader
window.onscroll = function() { scrollFunction() };

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
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//album

var slideshowslider = document.getElementById("slidecontainer");
var h = slideshowslider.offsetHeight;

function album1() {

    document.getElementById("isac").style.display = "block";
    document.getElementById("isac").style.width = "100%";
    if (window.matchMedia("(max-width: 700px)").matches) {
        disco.scrollIntoView();
    } else {
        window.scrollTo({
            top: 730 + h,
            left: 0,
            behavior: 'smooth'
        });
    }
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
    if (window.matchMedia("(max-width: 700px)").matches) {
        disco.scrollIntoView();
    } else {
        window.scrollTo({
            top: 470 + h,
            left: 0,
            behavior: 'smooth'
        });
    }
    document.getElementById("disco").style.backgroundColor = "rgb(46, 46, 46)";
    document.getElementById("albumRow").style.display = "none";


}

function forsvinn2() {

    document.getElementById("isac2").style.display = "none";
    document.getElementById("disco").style.backgroundColor = "rgb(46, 46, 46)";
    document.getElementById("albumRow").style.display = "inline-block";

}



//Videos
/*
const state = {};
const carouselList = document.querySelector(".carousel__list");
const carouselItems = document.querySelectorAll(".carousel__item");
const elems = Array.from(carouselItems);

// next and previous buttons consts
const arrowLeft = document.querySelectorAll(".arrow__left");
const arrowRight = document.querySelectorAll(".arrow__right");

carouselList.addEventListener('click', function(event) {
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

const getPos = function(current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
}

*/
var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");

function loadVideo(iframe) {
    $.getJSON(reqURL + iframe.getAttribute('cid'),
        function(data) {
            var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
            console.log(videoNumber);
            var link = data.items[videoNumber].link;
            id = link.substr(link.indexOf("=") + 1);
            iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?controls=0&autoplay=1");


        }
    );
}
var iframes = document.getElementsByClassName('latestVideoEmbed');
for (var i = 0, len = iframes.length; i < len; i++) {
    loadVideo(iframes[i]);

}

// Sliderfunksjon under

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {

    var i;

    var x = document.getElementsByClassName("latestVideoEmbed");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";


    }
    x[slideIndex - 1].style.display = "block";



}

//Pictures
function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var lastned = document.getElementById("lastned");
    lastned.href = imgs.src;
    expandImg.src = imgs.src;


    expandImg.parentElement.style.display = "block";

    document.getElementById("supercontainer").style.display = "none";
}

function steng() {
    //var expandImg = document.getElementById("expandedImg");
    //expandImg.parentElement.style.display='none'
    document.getElementById("supercontainer").style.display = "block";
    document.getElementById("container").style.display = "none";

}