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
	app.get('/',function(request,response){ });

	//GET -/DELETE/:id
	app.get('/DELETE/:id,',function(reqiest,response){ });

	//GET -/INSERT
	app.get('/Insert',function(request,response){ });

	//POST -/INSERT
	app.post('/Insert',function(request,response){ });

	//GET -/EDIT/:id
	app.get('/Edit/:id',function(request,response){ });

	//POST-/EDIT
	app.post('/Edit',function(request,response){ });
})).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});
