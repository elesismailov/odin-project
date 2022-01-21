

const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // console.log(req)
  switch(req.url) {
  	case '/': 
  		console.log("home page");
  		break;
  	case '/about': 
  		console.log('about page')
  		break;
  	case '/contact-me': 
  		console.log('contact page')
  		break;
  	case '/404': 
  		console.log('not found page')
  		break;
	}
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
