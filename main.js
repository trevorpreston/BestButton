'use strict';
(function(){
  
  console.log('javascript is connected!');

  var $body = document.body;
  var button = document.getElementById('sup');

  function sup(){
    alert("sup yo");
  }

  button.addEventListener('click', sup);

})();
