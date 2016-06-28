//CookieParser 미들웨어: 요청 쿠키를 쉽게 추출할수 있는 미들웨어
//CookieParser 미들웨어를 사용하면, cookies 속성이 부여.
//모듈을 추출합니다.
var connect=require('connect');
var cookieParser=require('cookie-parser');
var connectRouter=require('connect-router');

//서버를 생성합니다.
connect.createServer(connect.cookieParser,connectRouter(function(app){
//GET-/SetCookie
	app.get('/SetCookie',function(request,response){
		//응답합니다.
		response.writeHead(200,{
			'Content-Type':'text/html',
			'Set-Cookie':['breakfast=toast','dinner=lunch']
		});
		respond.end('<a href="/GetCookie">GO TO GET COOKIE</a>');
	});
//GET-/GetCookie
app.get('GetCookie',function(request,response){
	//쿠키를 추출합니다.
	var output=JSON.stringify(request,cookies);

	//응답합니다.
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>'+output+'</h1>');
});


})).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});

//https://github.com/loklak/loklak_webclient/issues/86
//cookie-parser의 동작 이상->경로 문제 같다.