//모듈을 추출합니다.
var mysql=require('mysql');

//데이터 베이스와 연결합니다.
//createClient 대신,createConnection을 해 줘야, 오류 발생x
var client=mysql.createConnection({
	//host,port,user,password,database,debug 등을 선택할수 있다.
	host:'localhost',
	user:'root',
	password:'apmsetup',
	database:'Company'
});

//데이터 베이스 쿼리를 사용합니다.
client.query('USE Company');

//? 토큰 사용:query() 메서드의 첫번째 매개변수에 "?" 입력=>
//두번째 매개변수에 배열을 입력할수 있음. 
//쿼리를 실행할때 자동으로 "?"토큰안에 배열요소가 순서대로 입력->
// 데이터를 쉽게 추가할수 있음.

client.query('INSERT INTO products (name,modelnumber,series)VALUES (?,?,?)',[
		'Name Value','Model Number Value','Series Value'
		],function(error,results,fields){
			console.log('삽입 실패');
		});


client.query('SELECT * FROM products',function(error,result,fields){

	if(error){
			consle.log('쿼리 문장에 오류가 있습니다.')
	}else{
			console.log(result);
	}
});