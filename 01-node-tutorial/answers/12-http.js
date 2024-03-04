const http = require('http');

const server = http.createServer((req,res) =>{
     // Check the request URL
    if (req.url ==='/') {
        res.end('Welcome to the home page!');
    } else if (req.url ==='/about') {
        res.end('Here is the about page!');
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for!</p>
        <a href="/">Back home</a>
        `);
    }
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
  });