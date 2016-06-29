//GET -/INSERT
app.get('/Insert',function(request,response){
	//insert.html
	fs.readFile('insert.html','utf8',function(error,data){
		//응답을 합니다.
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(data);
	});
});