
const http = require("http");
const fs = require("fs");
const files_static = require("node-static");

let files = new files_static.Server("./public");

function sendIndex(response){

	fs.readFile("index.html", function(err,data){
		
		if(err){
			console.error(err);
			return;
		}

		response.writeHead(200, {"Content-Type":"text/html"});
		response.write(data);
		
		response.end();
	});
}


function sendPlayer(response){

	fs.readFile("player.png", function(err,data){
		
		if(err){
			console.error(err);
			return;
		}

		response.writeHead(200, {"Content-Type":"image/png"});
		response.write(data);
		
		response.end();
	});
}





http.createServer(function(request,response){
	request.addListener('end',function(){
	files.serve(request, response);
	
	}).resume();	
		
/*	
	let url = request.url.split("/");

	switch(url[1]){
		case "player.png":
			sendPlayer(response);		
			break;

		default:
			sendIndex(response);
*/

}).listen(6969);


