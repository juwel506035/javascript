var photos= ["image/imag (2).jpg","image/img3.jpg", "image/img4.jpg"];
var imgTag=document.querySelector("img");



 var count=0;

function next()
{
count++;
if(count>=photos.length)
{
    count=0;
    imgTag.src=photos[count];

}
else
{
    imgTag.src=photos[count];

}


}

function pre()
{
    count--;
    if(count<0)
    {
        count=photos.length-1;
        imgTag.src=photos[count];

     
    }
    else
    {
        imgTag.src=photos[count];
    
    }
    
}