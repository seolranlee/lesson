// alert('hello world')


// 자바스크립트 값을 확인하고 기능을 점검하기 위한 방법
// 크롬 개발자 툴


// ie 낮은 브라우저에서는 에러로 간주한다.
// console.log('hello world');

// 1. 자료형
// 자료에 대한 타입

/*

    숫자 ( number, interger, int )
    문자 ( string, str )
    불리언 ( true, false )   참과 거짓, 0과 1로 표현
    배열 ( array, arr )
    객체 ( object, obj )

    null
    undefined


    1  숫자
    '문자'  문자


    */

// console.log(1) console.log(2);  이렇게 하면 에러가 난다.
// 애시당초 코드끝에 세미콜론 넣는 습관을 들이자.

// console.log(1);     //숫자
// console.log('1');   //문자
// console.log(true);  //불리언
// console.log('true');  //문자

// document.write(1);
// document.write('1');


// null vs undefined
// '없다'
// (object)값이 없다 vs 정의가 없다


// 변수(여기서 '수'는 '경우의 수'의 '수'를 의미한다.)
// 변하는 수
// 메모리 수 저장

// 변수의 선언과 동시에 데이터(자료)의 대입
// 자바스크립트의 하나의 '='은 대입의 개념을 가진다. 
var toy = 1;
var piano = '문자';


// 변수를 생성할 때 이름으로 사용하면 안되는 것들(예약어)
// for, if, while 등등등
// 숫자가 먼저 나오면 안된다.

var toy_sell_func = 0;
var toySeollFunc = 0;   // 낙타기법
// 변수의 이름에도 의미를 부여해서 넣는 것이 좋다.


// 먼저 선언하고 사용은 그 후에
// 스크립트 언어의 특징
// :순차적 실행( 한줄씩 )


var mbc = 2;
// 변수는 변할 수 있다.
mbc = 3;   // 변수의 재정의
var mbc = 3;    // 변수의 재생성. 재정의와는 다르다.


var a = 1;
var b = a;
var c = b;
var d  = c;
console.log(a);
console.log(b);
console.log(c);
console.log(d);


window.onload = function(){

	var boxTag = document.getElementsByClassName('box')[0];
	var popupName = "coding everybody";

	boxTag.addEventListener('click', function(){
		alert(popupName);
	});

};


// console.log(mbc);

// var mbc = 2;


// console.log(toy);
// // console.log('toy');

// console.log(piano);













