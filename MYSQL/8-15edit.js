//GET -/EDIT/:id
app.get('/Edit/:id',function(request,response){
	//Edit.html 파일을 읽습니다.
	fs.readFile('Edit.html','utf8',function(error,data){
		//데이터 베이스 쿼리를 실행합니다.
		client.quert('SELECT * FROM products WHERE id= ?',[request.params.id],
			function(error,result){
				//응답합니다.
				response.writeHead(200,{'Content-Type':'text/html' });
				response.end(ejs.render(data,{
					data:result[0]
				}));



			});
	});
});