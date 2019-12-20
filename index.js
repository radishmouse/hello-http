const http = require('http');

// const server = http.createServer((req, res) => {
const server = http.createServer((browserReq, serverResp) => {
    console.log('Oh wow I got a request');
    console.log(browserReq.url);
    console.log(browserReq.method);

    serverResp.end(`<h1>OMG IT WORKS!!!!</h1>`);
});

server.listen(3000, () => {
    console.log('Server is listening!');
});


// myButton.addEventListener('click', (event)=> {
//     console.log('they clicked');
// });