 // ges random number

 var wonOfnum=0;
 var lostOfnum=0;

 for(var i=1;i<=5;i++)
 {
    var guesssNumber=parseInt(prompt("Enter a number form 1 to 5 : "));
    var randomNumber=Math.floor(Math.random() *5) + 1;
    if(guesssNumber==randomNumber)
    {
       console.log("You have won ");
       wonOfnum++;
    }
   
    else
    {
       console.log("You have lost " + randomNumber);
       lostOfnum++;

    } 

   
 }
 document.write("Total number of won= " + wonOfnum + "</br>" );
 document.write("Total number of lost= " + lostOfnum + "</br>" );
