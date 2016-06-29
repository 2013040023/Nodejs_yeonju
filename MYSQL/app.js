//모듈을 추출합니다.
var fs=require('fs');

var connect=require('connect');
var connectRouter=require('connect-router');
var	serveStatic=require('serve-static');

var mysql=require('mysql');
var ejs=require('ejs');

//데이터 베이스와 연결합니다.
var client=mysql.createConnection({
	user:'root',
	password:'apmsetup',
	database:'company'
});

//서버를 생성합니다.
connect.createSever(connect.bodyParser(),connect.router(function(app){
	

	//GET -List
	app.get('/',function(request,response){ 
		//List.html 파일을 읽습니다.
		fs.readFile('List.html','utf8',function(error,data){
			//데이터 베이스 쿼리를 실행합니다.
			client.quert('SELECT * FROM products',function(error,result){
				//응답합니다.
				response.writeHead(200,{'Content-Type':'text/html'});
				response.end(ejs.render(data,{
					data:result
				}));
			});
		});
	});

	//GET -/DELETE/:id
	app.get('/DELETE/:id,',function(reqiest,response){

	//데이터 베이스 쿼리를 실행합니다.
	client.quert('DELETE FROM products WHERE id= ?',[request.params.id]);

	//응답합니다.
	response.writeHead(302,{'Location':'/'});
	reponse.end();

	 });




	//GET -/INSERT
	app.get('/Insert',function(request,response){

	//insert.html
	fs.readFile('insert.html','utf8',function(error,data){
		//응답을 합니다.
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(data);
	});

	 });




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



	//POST-/EDIT
	app.post('/Edit',function(request,response){ 

	//변수를 선언합니다.
	var body=request.body

	//데이터 베이스 쿼리를 실행합니다.
	client.quert('UPDATE products SET name=?,modelnumber=?,series=? WHERE id=?',[body.name,body.modelnumber,body.series,request.params.id]);

	//응답합니다.
	response.writeHead(302,{'Location': '/'});
	response.end();

	});
})).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});
