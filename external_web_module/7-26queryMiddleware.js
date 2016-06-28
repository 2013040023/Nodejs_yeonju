//Quey 미들웨어는 GET 요청 매개변수를 쉽게 추출할수 있게 만드는 미들웨어
//모듈을 추출합니다.
var connect=require('connect');
var serveStatic=require('serve-static');

//서버를 생성 및 실행합니다.
connect.createServer(connect.query(),function(request,response){
	//응답합니다.
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>'+JSON.stringify(request.query)+'</h1>');
}).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});

//코드 실행후
//http://127.0.0.1:52273/?name=yeonju&region=Incheon 접속!