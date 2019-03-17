/*var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log("runned");
  
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block"; 

  dots[slideIndex-1].className += " active";
}

/* var slideIndex = 0;
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
  setTimeout(showSlides, 1000); // Change image every 2 seconds
} */



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("UpBtn").style.display = "block";
  } else {
    document.getElementById("UpBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* function showIdeas(){
  document.getElementById("giftLables").style.display = "block";
  document.getElementById("giftValues").style.display = "block";
} */

/* function otherpref(){
    if (document.getElementById("food").selectedIndex == 4  ){
      console.log(document.getElementById("food").selectedIndex);
      
      document.getElementById("other").style.display = "inline";

    }
} */



//clock
//var clock = new FlipClock($('.clock'));


 //$('.clock'). FlipClock(3600 * (Math.random()*10)); 
 var currentdate = new Date();
 var weddingdate=1564225200000
 var timediff =  (weddingdate - currentdate)/1000
 var clock = $('.clock').FlipClock(timediff, {
    clockFace: 'DailyCounter',
		countdown: true
  });
  

var n = 1; 
  function addnewguest(){
    ++n ; 
    $( `<div class=\"form-group row\"><label class =\"col-sm-4 col-form-label\" for=\"name\">Name(${n})</label><div class=\"col-sm-5\"><input type=\"text\" required class=\"form-control\" id=\"name${n}\" name = \"name${n}\" placeholder=\"Guest ${n} name\"></div></div><div class=\"form-group row\"><label class=\"col-sm-4 col-form-label\" for=\"food\">Allergies(${n})</label><div class=\" col-sm-5\"><input type=\"text\"  class=\"form-control\" id=\"food${n}\" name=\"food${n}\" placeholder=\"Guest ${n} food allergies\"></div></div><br/>` ).insertBefore( "#addguest" );
    $(`#count`).val(`${n}`)
  }

  