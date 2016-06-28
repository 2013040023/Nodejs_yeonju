//모듈을 추출합니다.
var connect=require('connect');

//서버를 생성합니다.
var server=connect.createServer();

//미들웨어를 사용합니다.
server.use(connect.router(function(app){

}));

server.use(connect.static(__dirname+'/Resources'));

//서버를 실행합니다.
server.listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});