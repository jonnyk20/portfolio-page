$(document).ready(function() {
    //BEGIN               

   //Scroll to Top

$("#b1").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
  
  
    //Scroll to Row 6 - Work
$("#b3").click(function() {
    $('html, body').animate({
        scrollTop: $("#row3").offset().top
    }, 1000);
});
 
 
  //Scroll to Row 6 - contact
$("#b6").click(function() {
    $('html, body').animate({
        scrollTop: $("#row6").offset().top
    }, 1000);
});
  
$('body').scrollspy({target: ".navbar"})
  
    //END
  });



