//POST -/INSERT
app.post('/Insert',function(request,response){
	//변수를 선언합니다.
	var body=request.body;

	//데이터 베이스 쿼리를 실행합니다.
	client.query('INSERT INTO products(name,modelnumber,series) VALUES (?,?,?)',[body.name,body.modelnumber,body.series]);

	//응답합니다.
	response.writeHead(302,{'Location':'/'});
	response.end();
});