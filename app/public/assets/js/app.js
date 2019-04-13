$("#about").hide();
$("#portfolio").hide();
$("#contact").hide();
$(function () {
  //document.getElementById("animate").style.top="100vh";
  document.getElementById("animate").style.right="80vh";
  function myMove() {
    document.getElementById("animate").style.display = "block";
    var elem = document.getElementById("animate");
    var pos = 80;
    var id = setInterval(frame, 50);
    function frame() {
      if (pos == 4) {
        clearInterval(id);
      } else {
        pos--;
        elem.style.top = pos + 'vh';
        elem.style.left = pos + 'vh';
      }
    }
    show();
    function show() {
      $('#about').fadeTo('slow',1);
      setTimeout(()=>{
        // $("#about").css('display', 'block');
        // $("#about").show();
        $('#about').fadeTo('slow',1);
      }, 500);
      setTimeout(()=>{
        $('#portfolio').fadeTo('slow',1);
      }, 1000);
      setTimeout(()=>{
        $('#contact').fadeTo('slow',1);
      }, 1500);
    }
  }
  myMove();
});