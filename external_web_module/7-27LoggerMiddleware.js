//LoggerMiddleware: 웹 요청이 들어왔을때 로그를 출력할수 있게 하는 미들웨어
//모듈을 추출합니다.
var connect=require('connect');

//서버를 생성 및 실행
connect.createServer(connect.logger(),function(request,response){
	//응답을 합니다.
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>Hello Connect Module</h1>');
}).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});