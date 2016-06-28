
//모듈을 추출합니다.
var os = require('os');

//운영체제 호스트 이름을 리턴
console.log(os.hostname());

//운영체제 이름을 리턴
console.log(os.type());

//운영체제 플랫폼을 리턴
console.log(os.platform());

//운영체제 아키텍처를 리턴
console.log(os.arch());

//운영체제 버전을 리턴
console.log(os.release());

//운영체제가 실행된 시간을리턴
console.log(os.uptime());

//로드 에버리지 정보를 담은 배열을 리턴
console.log(os.loadavg());

//시스템 총 메모리를 리턴
console.log(os.totalmem());

//시스템에서 사용 가능한 메모리를 리턴합니다.
console.log(os.freemem());

//CPU 정보를 담은 객체를 리턴합니다.
console.log(os.cpus());

//네트워크 인터페이스 정보를 담은 배열을 리턴합니다.
console.log(getNetworkInterfaces());
