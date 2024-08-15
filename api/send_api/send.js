// event- onload(),onerror
// property- respose, responseText, responseType, responseURL, status etc
// function- open(),send(),setRequestHeader

console.clear();
// data server a post ba send korte cai 
// get method
const makeReqest = (method,url,data) =>
{
    const api = new XMLHttpRequest();
    api.open(method,url);
    api.setRequestHeader('Content-Type','application/json')
     
    api. onload = () => 
    {
        let data = api. response;
        console .log(JSON.parse(data));
    }
    api.onerror =() => // eorr handling kora 
    {
        console.log('eorror is here');
    }
    
    api.send(JSON.stringify(data)); // server a send
}

// get request
const getData= () =>{
  makeReqest(  'GET','https://jsonplaceholder.typicode.com/posts');
   
 }
 const sendData= () =>{
    makeReqest(  'post','https://jsonplaceholder.typicode.com/posts',{
        title: 'foo',
        body: 'bar',
        userId: 1,  
    });
     
   }
// update data
   const updateData= () =>{
    makeReqest(  'PUT','https://jsonplaceholder.typicode.com/posts/1',{
    id: 1,
    title: 'foofa',
    body: 'bar',
    userId: 1, 
    });
     
   }
   updateData();


 