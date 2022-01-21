

const http = require('http');
const { readFile } = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // console.log(req)
  switch(req.url) {
  	case '/': 
  		readFile('./index.html', 'utf8', (err, data) => {
  			res.end(data)
  		})
  		break;
  	case '/about': 
  		readFile('./about.html', 'utf8', (err, data) => {
  			res.end(data)
  		})
  		break;
  	case '/contact-me': 
  		readFile('./contact-me.html', 'utf8', (err, data) => {
  			res.end(data)
  		})
  		break;
  	default: 
  		readFile('./404.html', 'utf8', (err, data) => {
  			res.end(data)
  		})
  		break;
	}
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
