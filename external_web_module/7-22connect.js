//모듈을 추출합니다
var connect=require('connect');
var	serveStatic=require('serve-static');

var app=connect();
//서버를 생성 및 실행합니다.
app.use( function (request,response) {
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>Hello Connect Module..!</h1>');
});

app.listen(52273,function(){
	console.log('server Running at http://127.0.0.1:52273');
});


//* connect 모듈 에러가 날경우
// 1.npm 모듈의 버전이 3.x 이상일 경우
// npm install serve-static을 추가해 준다.
// 2.npm 모듈의 버전이 2.x 대일 경우
// $npm install connect@2.X.X 를 추가해 준다.

//저같은 경우는 2의 경우였기 때문에, 터미널에 npm install connect@2.X.X를 쳐 주었습니다.

// *http 모듈과 connect 모듈의 차이점
// 1.createServer 메서드의 매개변수에 여러 함수를 입력할 수 있습니다.