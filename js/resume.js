// get modal, button, span closer
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

// link and pdf open in new tab
$('a[href*="pdf"]').click(function(e) {
  e.preventDefault(); 
  var documentUrl = $(this).attr("href"); 
  window.open(documentUrl, '_blank');
});

$('a[href*="http"]').click(function(e) {
  e.preventDefault(); 
  var documentUrl = $(this).attr("href"); 
  window.open(documentUrl, '_blank'); 
});

// carousel in about section
var carousel = document.querySelector('.carousel');
var cellCount = 5;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-9.64rem) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});