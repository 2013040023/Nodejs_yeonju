//쿠키:정보를 클라이언트의 웹브라우저에 저장
//세션:정보를 서버에 저장하는 기술

//모듈을 추출합니다.
var connect=require('connect');
var serveStatic=require('serve-static');

//서버를 생성합니다.
var server=connect.createServer();


//미들웨어를 사용합니다.
server.use(connect.cookieParser('secret'));
server.use(connect.session());
server.use(function(request,response){

	//변수를 선언합니다.
	var output='';
	output+='<p>Cookies:'+JSON.stringify(request.cookies)+'</p>';
	output+='<h1>Session:'+JSON.stringify(request.session)+'</h1>';

	//응답합니다.
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end(output);

	//세션을 저장합니다.
	response.session.now=(new Date()).toUTCString();

});

//서버를 실행합니다.
server.listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});