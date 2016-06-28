//Eventemitter 객체를 생성합니다.
var custom = new process.EventEmitter();

//이벤트를 연결합니다. tick 같은 경우는 async 한 동작을 할때 실행시 값을 잡아오도록 합니다.
//지금말고, 나중에 쓰도록 설정
custom.on('tick',function(){
	console.log('이벤트를 실행합니다.^_^');
});

//이벤트를 강제로 발생시킵니다.
custom.emit('tick');