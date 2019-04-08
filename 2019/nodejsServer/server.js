var http=require('http');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end();
}).listen(8888);
console.log('server running at 8888');