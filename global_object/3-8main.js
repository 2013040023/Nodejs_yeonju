//모듈을 추출합니다.
var mymodule=require('./3-7mymodule.js');

//모듈을 사용합니다.
console.log('abs(-273)= %d',mymodule.abs(-273));
console.log('circleArea(3)= %d',mymodule.circleArea(3));

//모듈 생성시에는 exports 객체
//모듈 추출시에는 require 객체