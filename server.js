const http = require("http");
const fs = require("fs")//file system�M��ޥ�
var path = require('path');
const app = express();
const sendresponse = (filename, statusCode, response) => {
	fs.readFile('./' + filename, (error, data) => {
		if (error) {
			response.statusCode = 500;
			response.setHeader("Content-Type","text/plain");//�]�w���Y�����e����
			response.end("Internet error");
		} else {
			response.statusCode = statusCode;
			response.setHeader("Content-Type", "text/html");//(text/html):html�榡 (text/plain):�¤奻�榡
			response.end(data);
		}
	});
};

	const server = http.createServer((request, response) => {
		if (request.url != '/favicon.ico') {//����terminal���/favicon.ico
			console.log(request.url,request.method);
		}
		const method = request.method;
		const url = request.url;
		if (method === "GET") {//���A�X���`:200 ���`:404
			if (url === "/") {
				sendresponse("index.html", 200, response);
			} else if (url === "/about.html") {
				sendresponse("about.html", 200, response);
			} else {
				sendresponse("404.html", 404, response);
			}
		} else {
				
		}
	});

app.use(express.static(path.join(__dirname, 'public')));
const port = 3000;
const ip = "127.0.0.1";

server.listen(port, ip, () => {
	console.log('server is running at http://'+ip+':'+ port);
});