// 함수

// 함수형 언어

// 함수 : 경우의 수를 담는 하나의 큰 공간 ( 모듈 )

// 함수의 사용 이유

/*
	
	1. 자주 사용되는 코드를 재활용 할 수 있다.
	2. 함수 내에 코드를 개선하면 전체적인 어플리케이션 기능을 개선할 수 있다.
	3. 코드를 수정 할 시 쉽게 찾을 수 있다.
	4. 필요할 때만 사용하기 때문에 (메모리)낭비를 줄일 수 있다.

*/

/*
function(기능을 동작하기 위해서 필요한 정보){

	// 기능을 정의 하는 부분

}
*/

/*
선택자.이벤트붙인다('클릭',기능을 담는 박스(열쇠)){

	문을 열어라
};
*/

var doc = document;
/*
doc.getElementById('open').addEventListener('click',function(){

});
*/


// doc.getElementById('box').addEventListener('click',function(){

// 	// 함수의 실행 // 명령 // 호출
// 	// name();
// 	func();

// });


// 변수는 선 대입이 되어야 사용 가능.(함수는 변수와 달리 어디다가 놓든, 내가 필요할 때 사용할 수 있다.)
var func = function(){

	// alert('hello world');
};



// 함수 자체 실행 // 자기가 자기를 호출
(function name(){

	// alert('everybody coding');
	// func();
})();

var b = eleven();	// 전역변수

console.log(b);
// console.log(eleven(););	// 안되는 이유

// 함수의 반환(return)
function eleven(){

	// 기능의 정의
	// 문을 열고 들어가서 열쇠를 가지고 와라.

	// 돌려줘(열쇠)
	var a = 10;		// 지역변수(그 함수 내에서만 사용 가능)
	return a + a;

}

// console.log(a);	// a는 지역변수 이기 때문에 undefined라고 뜬다.

// 배열을 통한 리턴의 동작방식

var arr = [ 10, 20, 30, 40, 50 ];

// function을 씌우는 이유는 '필요할때만' 사용하기 위해.
function arrFunc(){

	for(var i = 0; i < arr.length; i++){

		return arr[i];
		// 함수가(arrFunc) 리턴을 만나면 그 함수(arrFunc)는 정지한다.( 끝남 )
	}	
}

console.log(arrFunc());	// 호출	// call
// 10이 찍힘


function arrFunc2(){

	var go;

	for(var i = 0; i < arr.length; i++){

		go = arr[i];

		// 함수는 리턴을 만나면 그 함수는 정지한다.( 끝남 )
	}

	return go;	// 마지막으로 돌게 되는 숫자 50이 반환되고 함수는 정지.(끝난다)

}

console.log(arrFunc2());	// 호출	// call
// 50이 찍힘(return에 위치에 따라 반환되는 결과값이 달라짐.)





// 3. 동작을 하기 위한 정보 & 준비물 ( 매개변수 )
// 인자값, 파라미터

// function(매개변수)


function plus(k, p){	// 매개변수

	var num1 = k;	// 지역변수

	if( !p ){
		
		// p = 0;
		return num1;

	} else {

		return num1 + p; 
	}

	
}

var oo = 400;	// 전역변수

console.log(plus(oo, 300));
console.log(plus(200));



// 4. 매개변수를 정하지 않고 매개변수처럼 활용하는 방법

function add(){

	// console.log(arguments);	// 배열로 값이 들어옴.

	var total = 0;	// 이 위치 중요해! 실수하지 말자.

	for(var i in arguments){
	
		total = total + arguments[i];
	}

	return total;
}

var aa = 100;
var bb = 200;
var cc = 300;

console.log(add(aa,bb,cc));	// 600
console.log(add(aa,bb));	// 300



/* ==========================================================================
* 함수의 활용
* ========================================================================== */

/*
var btn1 = doc.getElementById('btn1');
var btn2 = doc.getElementById('btn2');
var btn3 = doc.getElementById('btn3');
var btn4 = doc.getElementById('btn4');
*/
var result = doc.getElementById('result');
var blass = doc.querySelectorAll('.button');	// 클래스로 찾는 기능
// querySelector뒤에 All이 붙는 순간 배열로 들어간다.

console.log(blass);
console.log(blass.length);

/*
blass[0].addEventListener('click',function(){cal('plus');});
blass[1].addEventListener('click',function(){cal('minus');});
blass[2].addEventListener('click',function(){cal('multi');});
blass[3].addEventListener('click',function(){cal('division');});
*/
// console.log(blass.length)


// this !important(함수에서 굉장히 중요한 개념)
for(var i = 0; i < blass.length; i++){
	// console.log('num');
	blass[i].addEventListener('click',function(){
		
		var data = this.innerHTML;
		// this는 function에 속해 있는 내용.
		// click이벤트에 대한 내용으 받아온다.

		cal(data);
	});
}


function cal(info){

	// var data = this.id
	// cal함수 안에서 this는 사용할 수 없다.


	var num1 = doc.getElementById('num1').value;
	var num2 = doc.getElementById('num2').value;
	
	/*
	if(info == '+'){
		var total = Number(num1) + Number(num2);
	} else if(info == '-'){
		var total = Number(num1) - Number(num2);
	} else if(info == '*'){
		var total = Number(num1) * Number(num2);
	} else {
		var total = Number(num1) / Number(num2);
	}
	*/

	var total = eval(num1 + info + num2);
	
	// eval(); 
	// 괄호 안으로 들어온 내용을 '자바스크립트 코드'로 바꿔준다.
	// but굉장히 위험한 놈 : 안쓰는게 좋다.

	result.innerHTML = total;

}

// eval('var a = 10');
// console.log(a);


// 퀴즈

// 두 수 사이에 있는 모든 정수의 합을 리턴한다.





// function quiz(a, b){

// 	if ( a < b ){

// 		for(var i = a; i <= b; i++){

// 			result = result + i;
// 		}

// 	}else if ( a > b){

// 		for(var i = b; i >= a; i--){
// 			result = result + i;
// 		}

// 	}
	
// 	// quiz

// 	return result;

// }


// function quiz(a,b){

// 	var result = 0;
// 	// var high;
// 	// var low;
// 	// if( a > b ){

// 	// 	high = a;
// 	// 	low = b;

// 	// }else if( a < b ){

// 	// 	low = a;
// 	// 	high = b;

// 	// }else{
// 	// 	return a;
// 	// }

// 	// 퀴즈
// 	/*
// 	for(var i = low; i <= high; i++){
// 		result = result + i;
// 	}
// 	*/

// 	for(var i = Math.min(a,b); i <= Math.max(a,b); i++){
// 		result = result + i;
// 	}

// 	return result;
// }



// function quiz(a,b){

// 	var result = 0;	// 이 위치 중요. 왜 여기 있는지 생각해!

// 	if( a < b ){

// 		for(var i = a; i <= b; i++){
// 			result = result + i;
// 		}

// 	} else if( a > b ){

// 		for(var i = b; i <= a; i++){
// 			result = result + i;
// 		}

// 	} else{

// 		result = a;
// 	}

// 	return result;

// }


function quiz(a,b){

	var result = 0;
	for(var i = Math.min(a, b); i <= Math.max(a,b); i++){
		result = result + i;
	}
	return result;

}

console.log(quiz(3,5));
console.log(quiz(1,10));
console.log( quiz(2,-1) );
console.log( quiz(9));
