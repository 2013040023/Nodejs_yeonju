//CookieParser 미들웨어: 요청 쿠키를 쉽게 추출할수 있는 미들웨어
//CookieParser 미들웨어를 사용하면, cookies 속성이 부여.
//모듈을 추출합니다.
var connect=require('connect');

//서버를 생성합니다.
connect.createServer(connect.cookieParser(),connect.router(function(app){

})).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});