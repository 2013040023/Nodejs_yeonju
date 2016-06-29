//GET -DELETE/:id
app.get('/Delte/:id',function(request,response){
	//데이터 베이스 쿼리를 실행합니다.
	client.quert('DELETE FROM products WHERE id= ?',[request.params.id]);

	//응답합니다.
	response.writeHead(302,{'Location':'/'});
	reponse.end();
});