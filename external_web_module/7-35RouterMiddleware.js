//RouterMiddleware: Page routing을 구현하는 미들웨어
//페우지 라우팅이란 클라이어트 요청에 적절한 페이지를 제공하는 기술

//모듈을 추출합니다.
var connect=require('connect');
var connectRouter=require('connect-router');

//서버를 생성합니다.
connect.createServer(connectRouter(function(app){

})).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});