// event- onload(),onerror
// property- respose, responseText, responseType, responseURL, status etc
// function- open(),send(),setRequestHeader

console.clear();
// get method
const makeReqest = (method,url) =>
{
    const api = new XMLHttpRequest();
    api.open(method,url);
     
    api. onload = () => 
    {
        let data = api. response;
        console .log(JSON.parse(data));
    }
    api.onerror =() => // eorr handling kora 
    {
        console.log('eorror is here');
    }
    
    api.send();
}

// get request
const getData= () =>{
  makeReqest(  'GET','https://jsonplaceholder.typicode.com/posts');
   
 }

getData();