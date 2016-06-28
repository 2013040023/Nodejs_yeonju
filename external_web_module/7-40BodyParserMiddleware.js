//BodyParserMiddleware: post 요청시, 데이터를 쉽게 추출하게끔 하는 미들웨어
//BodyParser 미들웨어를 사용하면 ,requset 객체에 body속성이 부여됩니다.
//모듈을 추출합니다.
var connect=require('connect');

//서버를 생성합니다.
connect.createServer(connect.bodyParser(),connect.router(function(app){

})).listen(52273,function(){
	console.log('server running at http:127.0.0.1:52273');
});