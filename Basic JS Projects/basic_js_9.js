// timer
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick(){
        seconds --;
        
        if (seconds >= 0){
            timer.innerHTML = seconds;
            setTimeout(tick, 1000);
        }        
        else if(seconds == -1){
            alert("Slideshow Starting...");
            showSlides(1);
        }
    }
    tick();

}


// slideshow

var slideIndex=1;

// Next/previous controls
function plus_slide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function current_slide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("my_slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}