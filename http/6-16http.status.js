//http status code 예
//HTTP Status Code  설 명         예
//1XX				처리중		  100 Continue
//2XX 				성공			  200 OK
//3XX 				리다이렉트	  300 Multiple Choice
//4XX				클라이언트오류 400 Bad Request
//5XX				서버 오류	  500 Internal Server Error

//모듈을 추출합니다.
var http=require('http');

//웹서버를 생성 및 실행합니다.
http.createServer( function (request,response) {
	response.writeHead(404);
	response.end();
}).listen(52273, function () {
	console.log('Server Running at http://127.0.0.1:52273');
});