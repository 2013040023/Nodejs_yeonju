//쿠키:정보를 클라이언트의 웹브라우저에 저장
//세션:정보를 서버에 저장하는 기술

//모듈을 추출합니다.
var connect=require('connect');
//서버를 생성합니다.
var server=connect.createServer();

//미들웨어를 사용합니다.
server.use(connect.cookieParser());
server.use(connect.session());
server.use(function(request,response){

});

//서버를 실행합니다.
server.listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});