//모듈을 추출합니다.
var http=require('http');
var fs=require('fs');
var ejs=require('ejs');

//서버를 생성하고 실행합니다.
http.createServer(function ( request, response){
	//EJSPage.ejs
	fs.readFile('EJSPage.ejs','utf8',function(error,data){
	response.writeHead(200, { 'Content-Type' : 'text/html' });
	//render module:ejs 페이지를 html 페이지로 바꾼다.
	response.end(ejs.render(data,{
		name:'Yeonju',
		description:'Hello EJS With Node.js ... !'
	}));

	});
}).listen(52273,function(){
	console.log('Server Running at http:127.0.0.1:52273');
});

//템플릿 엔진을 사용시,웹페이지를 동적으로 구성하여
//클라이언트에게 항상 다른 페이지를 보여 줄 수 있습니다.