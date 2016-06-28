//connect 모듈은 미들웨어를 사용하여 기능을 확장.

//모듈을 추출합니다.
var connect=require('connect');

//서버를 생성 및 실행합니다.
connect.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>hello Connect Module</h1>');
}).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});