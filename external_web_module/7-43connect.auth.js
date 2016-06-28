//모듈을 추출합니다.
var fs=require('fs');
var connect=require('connect');

//변수를 선언합니다.
var id='yeonju';
var passowrd='123123';

//서버를 생성합니다.
var server=connect.createServer();

//미들웨어를 사용합니다.
server.use(conenct.cookieParser());
server.use(connect.bodyParser());
server.use(connect.router(function(app){
		//GET -/LOGIN
		app.get('/Login',function(request,response){
			if(request.cookies.auth==true){
				//응답합니다.
				resposne.writeHead(200,{'Content-Type':'text/html'});
				response.endD('<h1>Login Success</h1>');
			}else{
				//로그인이 되어있지 않을 경우
				fs.readFile('Login.html',function(error,data){
					//응답합니다.
					respose.writeHead(200,{'Content-Type':'text/html'});
					respose.end(data);
				});
			}
		});

		//POST-LOGIN
		app.post('/Login',function(request,response){
			if(request.body.id== id && request.body.password==password){
				//로그인 성공시
				respose.writeHead(302,{
					'Location':'/Login',
					'Set-Cookie':['auth=true']
				});
				response.end();
			}else{
				//로그인 실패시
				response.writeHead(200,{'Content-Type':'text/html'});
				response.end('<h1>Login Fail</h1>');
			}
		});
}));

//서버를 실행합니다.
server.listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});