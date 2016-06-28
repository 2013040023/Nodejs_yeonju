//JadePage.jade 파일을 읽습니다.
fs.readFile('JadePage.jade','utf8',function(error,data){
	
		//Jade 모듈을 사용합니다.
		var fn=jade.compile(data);

		//출력합니다.
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(fn({
			name:'RintIanTta',
			description:'Hello EJS With Node.js... ! '
		}));
});