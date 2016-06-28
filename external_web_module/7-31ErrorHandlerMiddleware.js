//모듈을 추출합니다.
var connect=require('connect');

//서버를 생성 및 실행합니다.
connect.createServer(function(request,response){
	//예외를 강제로 발생시킵니다.
	throw new Error('Page Not Found');
},connect.errorHandler({
	//stack: 웹페이지에 오류 메시지와 스택 추적을 출력합니다.
	stack:true,
	//message:웹페이지에 예외 메시지를 출력합니다.
	message:true,
	//dump:콘솔 화면에 예외 메시지와 스택 추적을 출력합니다.
	dump:true
})).listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});