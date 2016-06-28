//이벤트 강제 발생 emit(event,[arg1],[arg2],...[]) => 이벤트를 실행

//exit 이벤트를 연결합니다.
process.on('exit',function(){
	console.log('안녕히 계세요...!');
});

//이벤트를 강제로 발생시킵니다.

process.emit('exit');

process.emit('exit');

process.emit('exit');

process.emit('exit');

//프로그램 실행 중
console.log('프로그램 실행 중');