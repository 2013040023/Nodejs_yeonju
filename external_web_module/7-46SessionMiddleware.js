//쿠키:정보를 클라이언트의 웹브라우저에 저장
//세션:정보를 서버에 저장하는 기술

//모듈을 추출합니다.
var connect=require('connect');
var serveStatic=require('serve-static');


//서버를 생성합니다.
connect.createServer(connect.cookieParser(),connect.session({
	secret:'secret',
	key:'another sid',
	cookie:{
		maxAge:60*1000
	}
}),function(request,response){
	//변수를 선언합니다.
	var output='';
	output+='<p>Cookies:'+JSON.stringify(request.cookies)+'</p>';
	output+='<h1>Session:'+JSON.stringify(request.session)+'</h1>';

	//응답합니다.
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end(output);

	//세션을 저장합니다.
	response.session.now=(new Date()).toUTCString();


}).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});