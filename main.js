'use strict';
(function(){

  console.log('javascript is connected!');



  function sup(){
    alert('sup dude');
  }

  var $body = document.body;
  var button = document.getElementById('sup');



  //I made a change
  button.addEventListener('click', sup);

})();
