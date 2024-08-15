for(var i=0;i<3;i++)
{
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function()
{
  var text= this.innerHTML;
  console.log(text);

  switch(text)
  {
    case "a":
      var audio= new Audio("sound/audio-1.mp3");
      audio.play();
      break;

      case "b":
        var audio= new Audio("sound/audio-2.mp3");
        audio.play();
        break;

        case "c":
          var audio= new Audio("sound/audio-3.mp3");
          audio.play();
          break;
  }

});


}