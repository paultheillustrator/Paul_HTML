var init = function() {
  var card = document.getElementById('card');
  
  document.getElementById('flip').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, true);
};

window.addEventListener('DOMContentLoaded', init, false);