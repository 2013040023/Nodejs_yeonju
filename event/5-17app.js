//모듈을 추출합니다.
var rint=require('./5-16rint');

//이벤트를 연결합니다.
rint.timer.on('tick',function(){
	console.log('이벤트를 실행합니다');
});