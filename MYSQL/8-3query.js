//모듈을 추출합니다.
var mysql=require('mysql');

//데이터 베이스와 연결합니다.
var client=mysql.createClient({
	//host,port,user,password,database,debug 등을 선택할수 있다.
	user:'root',
	password:'apmsetup'
});

//데이터 베이스 쿼리를 사용합니다.
client.query('USE Company');
cliecnt.query('SELECT * FROM products',functioin(error,result,fields){

});