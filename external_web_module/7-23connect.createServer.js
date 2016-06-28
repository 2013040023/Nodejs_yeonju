//모듈을 추출합니다.
var connect=require('connect');
var serveStatic=require('serve-static');

//서버를 생성 및 실행합니다.
connect.createServer(function(request,response,next){
	//첫번째 매개변수
	console.log('첫번째 함수입니다.');

	//다음 매개 변수로 입력한 함수를 실행합니다.
	next();
},function(request,response,next){
	//두번째 매개변수
	console.log('두번째 함수입니다.');

	//다음 매개 변수로 입력한 함수를 실행합니다.
	next();
},function(request,response,next){
	//응답합니다.
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>Hello Connect Module</h1>');
}).listen(52273,function(){
	console.log('server Running at http://127.0.0.1:52273');
});