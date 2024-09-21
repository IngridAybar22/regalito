onload = () => {
    document.body.classList.remove("container");
  };


//carta

$(document).ready(function(){
  $('.left-curtain').css('width', '0%');
  $('.right-curtain').css('width', '0%');

  $('.valentines-day').click(function(){
    // Primero oculta el mensaje
    $('#intro-message').fadeOut(500, function() {
      // Luego realiza las otras animaciones
      $('.envelope').css({'animation':'fall 3s linear 1', '-webkit-animation':'fall 3s linear 1'});
      $('.envelope').fadeOut(800, function() {
        $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();
        
        $('#card').css({'visibility':'visible', 'opacity': 0, 'transform': 'scale(0.1)'});
        $('#card').animate({'opacity': 1}, {duration: 1000, step: function(now, fx) {
          var scale = 1 + Math.sin(now * Math.PI) * 0.1;
          $(this).css('transform', 'scale(' + scale + ')');
        }});
      });
    });
  });
});
