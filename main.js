console.log('javascript is connected!')

var $body = document.body;
var button = document.getElementById('sup');

function sup(){
  alert('sup dude');
}

button.addEventListener('click', sup)
