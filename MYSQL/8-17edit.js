//POST -/EDIT
app.post('/Edit',function(request,response){
	//변수를 선언합니다.
	var body=request.body

	//데이터 베이스 쿼리를 실행합니다.
	client.quert('UPDATE products SET name=?,modelnumber=?,series=? WHERE id=?',[body.name,body.modelnumber,body.series,request.params.id]);

	//응답합니다.
	response.writeHead(302,{'Location': '/'});
	response.end();
});