// 4 way to call api - xmlmttpRequest,fetch,axios,jquery
// fetch() has replaced xmlmttpRequest
// fetch()- global method for making HTTP Request
// 2 way to call - then ,async await
// + fetch() is easy to use compare to xmlmttpRequest
// + fetch () is return a promise
// - fetch() returned promise can only handle network error
// - does not all the older brower

console.clear();
 fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then((res) => res.json()) // json convart kore nite hbe then use korte hbe
 .then((res) => console.log(res));