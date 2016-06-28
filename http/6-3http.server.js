//모듈을 추출합니다.
var http=require('http');
//Server 객체를 생성합니다.
var server=http.createServer();

//Server 객체에 이벤트를 연결합니다.
//request: 클라이언트가 요청할때 발생하는 이벤트 입니다.
server.on('request',function(){
	console.log('Request on');
});
//connection: 클라이언트가 접속할때 발생하는 이벤트 입니다.
server.on('connection',function(){
	console.log('Connetction On');
});
//close: 서버가 종료될 때 발생하는 이벤트 입니다.
server.on('close',function(){
	console.log('Close On');
});

//listen() 메서드:서버를 실행하는 메서드를 실행합니다.
server.listen(52273);