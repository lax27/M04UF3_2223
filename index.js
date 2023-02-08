
const http = require("http");
const fs = require("fs");


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
	
	console.log(request.url);
	
	let url = request.url.split("/");

	switch(url[1]){
		case "player.png":
			sendPlayer(response);		
			break;

		default:
			sendIndex(response);

	}
}).listen(6969);


