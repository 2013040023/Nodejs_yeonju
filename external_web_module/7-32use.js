//use메서드 의 사용: createServer() 메서드의 매개변수로 
//많은 미들웨어를 추가하면 코드가 굉장히 더러워 지므로, use 메서드를 사용

//모듈을 추출합니다.
var connect=require('connect');

//서버를 생성합니다.
var server=connect.createServer();

//Logger 미들웨어를 사용합니다.
server.use(connect.logger());

//request 이벤트 핸들러를 지정합니다.
server.use(function(request,response){
	//응답합니다.
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>hello Connect Module</h1>');
});

//ErrorHandler 미들 웨어를 사용
server.use(connect.errorHandler({
	stack:true,
	message:true,
	dump:true
}));

//서버를 실행합니다.
server.listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});

//★createServer() 메서드에 매개 변수로 입력하는 순서대로
// use() 메서드를 사용하여
//미들웨어를 지정하면 됩니다. 중요한 내용임으로 꼭 기억!