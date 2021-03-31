require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const stripe = require('stripe')('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');
const uuid = require('uuid/v4');

const MONGODB_URI = process.env.MONGODB_URI
const db = mongoose.connection;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on('open', () => {
    console.log('Mongo is Connected');
});
/* Middleware */
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV !== 'development'){
  app.use(express.static('public'))
}
app.use(/\.[0-9a-z]+$/i, express.static('public'));

/* Controller Goes Here Remove the test*/

app.use('/api/photos', require('./controllers/photos'))

app.post('/checkout', async (req, res) => {
	console.log('Request:', req.body);

	let error;
	let status;

	try {
		const { product, token } = req.body;

		const customer = await
		stripe.customers.create({
			email: token.email,
			source: token.id
		});

		const idempotency_key = uuid();

		const charge = await stripe.charges.create({
			
		})

	}catch(error){

	}
})

/* Controller Ends here */
//LISTENER


// for react router
app.get('*', (req, res) => {
	res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
})

app.listen(PORT, () => {
    console.log(`API Listening on port ${PORT}`);
});



/* Vanilla Node Server
const http = require('http'); // The node http module allow you to create servers
const fs = require('fs'); // The node file system module allows you to create files and interact with file system
const path = require('path'); // path allows you to get the path of a folder etc.
const PORT = process.env.PORT || 8080;

const public = __dirname + '/public'

http.createServer(function (req, res) {
	let filePath = public + req.url;
	if (filePath == public + '/') {
	  filePath = public + '/index.html';
	}
  filePath = filePath.split('?')[0]

	let extName = String(path.extname(filePath)).toLowerCase();
	const mimeTypes = {
	'.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
	};

	let contentType = mimeTypes[extName] || 'application/octet-stream';
	fs.readFile(filePath, function(error, content) {
	if (error) {
	  if(error.code == 'ENOENT') {
	    fs.readFile(public + '/404.html', function(error, content) {
	      res.writeHead(404, {'Content-Type': 'text/html'});
	      res.end(content, 'utf-8');
	    });
	  }
	  else {
	    res.writeHead(500);
	    res.end('Sorry, you got an error bro here it is'+error.code+' ..\n');
	  }
	}
	else {
	   res.writeHead(200, { 'Content-Type': contentType });
	   res.end(content, 'utf-8');
	  }
	});
}).listen(PORT);

console.log(`Server started! Listening on port: ${PORT}`);
// basic node server without express serving
*/
