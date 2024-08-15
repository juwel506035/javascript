for(var i=0;i<3;i++)
    {
        document.querySelectorAll(".mybutton")[i].addEventListener("click", function()
    {
      var text= this.innerHTML;
      console.log(text);
      audioplay(text);
      playAnimation(text);
    
     
    });
    
    
    }
    // keyboard ar jnno

    document.addEventListener("keypress",function(event){

        var text= event.key;
        audioplay(text);
      playAnimation(text);
    

    });
    // keyboard ar jnno end

     function audioplay(text)
     {

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
      
     }

     function playAnimation(text)
     {
        // animation add
       var selectButton= document.querySelector("." +text);
       selectButton.classList.add("anim");

       // amimation remove 
       setTimeout(function()
    {
        selectButton.classList.remove("anim");
    }, 1000);
     }