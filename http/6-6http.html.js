//모듈을 추출합니다.
//파일 시스템 모듈을 사용해 파일을 제공
var fs=require('fs');
var http=require('http');

//웹 서버를 생성하고 실행합니다
http.createServer(function (request,response){
	//html 파일을 읽습니다.
	fs.readFile('6-8HTMLPage.html',function(error,data){
		response.writeHead(200,{'Contetnt-Type':'text/html'});
		response.end(data);
	});
}).listen(52273,function(){
	console.log('Sarver Running at http://127.0.0.1:52273');
});