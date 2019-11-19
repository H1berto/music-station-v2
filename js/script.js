// var slideIndex = 1;
// showSlides(slideIndex);

// // Função para passar ou voltar os slides
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Função para exibir um slide especifico
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// Função para gerenciar o slider não automatico
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("item_slide");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }

var slideIndex = 0;
showSlides();
//Gerenciar slider automatico
function showSlides() {
    var slideIndex = 0;
    showSlides();
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("item_slide");
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
      setTimeout(showSlides, 7000); // Change image every 2 seconds
    }
}