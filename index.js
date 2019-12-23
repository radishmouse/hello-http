const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
const server = http.createServer((browserReq, serverResp) => {
    console.log('Oh wow I got a request');
    console.log(browserReq.url);
    console.log(browserReq.method);

    let url = browserReq.url;
    if (url === '/') {
        url = '/index.html';
    }

    let isImage = false;
    let contentType = 'text/html';
    if (url.endsWith('css')) {
      console.log('css');
      contentType = 'text/css';
    } else if (url.endsWith('jpg') || url.endsWith('jpeg')) {
      isImage = true;
      console.log('jpg');
      contentType = 'image/jpg';
    } else if (url.endsWith('png')) {
      isImage = true;
      console.log('png');
      contentType = 'image/png';
    } else if (url.endsWith('gif')) {
      isImage = true;
      console.log('gif');
      contentType = 'image/gif';
    }

    // Read the HTML file's contents
    // so we can send it in the Response
    fs.readFile(`${__dirname}/public${url}`, (error, buf) => {
        if (error) {
            console.log(error);

            serverResp.writeHead(404, {
              'Content-Type': 'text/html'
            });

            serverResp.end(`<h1>File not found</h1>`);
        } else {
            serverResp.writeHead(200, {
                // 'Content-Type': 'text/html'
                'Content-Type': contentType
                // 'Content-Type': 'application/json'
            });
            if (isImage) {
              serverResp.end(buf);
            } else {
              const contents = buf.toString();
              serverResp.end(contents);
            }
        }
    });
    // serverResp.end(`<h1>OMG IT WORKS!!!!</h1>`);
});

server.listen(3000, () => {
    console.log('Server is listening!');
});


// myButton.addEventListener('click', (event)=> {
//     console.log('they clicked');
// });
