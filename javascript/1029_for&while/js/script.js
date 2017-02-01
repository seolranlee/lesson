// 반복문

var doc = document;	// document는 html파일을 의미한다.

// doc.write('안녕하세요');
// doc.write('안녕하세요');
// doc.write('안녕하세요');
// doc.write('안녕하세요');
// doc.write('안녕하세요');
// doc.write('안녕하세요');
// doc.write('안녕하세요');
// doc.write('안녕하세요');
// doc.write('안녕하세요');

// for문
// for( 초기값, 조건식, 증감식 ){ 동작 }
// ++ -- 
var a = 10;
console.log(a);
a++;
a++;
console.log(a);


for( var i = 0; i < 10; i++ ){
	doc.write('안녕하세요' + i + '<br>');
}


// while문
var j = 0;
while ( j < 10 ){
	doc.write('누구세요' + j + '<br>');
	// j++;
	// j++;
	// for문은 안되는 용도(j++,j++두번쓰기)
	// j = j + 1;
	j = 10;
	// 한번 실행된다
	// for문에 비해 좀 더 커스터마이징 하기 편하다.
}

// for가 필요할 때가 있고 while이 필요할 때가 있다.


// 반복문

for(var i = 0; i < 10; i++){

	// continue와 break의 차이 알아둬
	doc.write(i);
	doc.write('<br>');

	if( i == 5){

			// continue;	// 조건만 제외하고 계속 진행.
			// break;	// 조건에서 멈춰.
			i = 10;
	}

}


// 다중 반복문

for(var i = 2; i < 10; i++){

	for(var j = 1; j < 10; j++){
		
		doc.write( i + ' X ' + j + ' = ' + i * j + '<br>' );
	
	}
	doc.write('<br>');
}




