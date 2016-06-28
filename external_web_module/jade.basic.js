//모듈을 추출합니다.
var http=require('http');
var jade=require('jade');
var fs=require('fs');

//서버를 생성하고 실행합니다.
http.createServer(function(request,response){
		//JadePage.jade 파일을 읽습니다.
		fs.readFile('JadePage.jade','utfp8',function(error,data){

		//Jade 모듈을 사용합니다.
		//compile(str) : Jade 문자열을 HTML 문자열로 바꿀수 있는 함수를 생성합니다.
		var fn=jade.complile(data);

		//출력합니다.
		respose.writeHead(200.{'Content-Type':'text/html'});
		respond.end(fn());
		});
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});



