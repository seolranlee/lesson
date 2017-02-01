$(document).ready(function(){	// 사실 ready function안에 있어서 모두 지역이긴 함.(구지 따지면)

	// 제이쿼리 이벤트 사용
	$('#box').on('click',function(){
		alert('a');
	});

	// 함수

	// 스코프(scope) : 영역

	var scope = 10; 	// 전역변수(실제로는.. 전역 아니다 ㅋㅋㅋ)
	var hoi = 30;	// 전역변수


	// name: 전역함수
	function name(){
		var scope = 20;	// 지역변수 
		// var op = 50;	// 지역변수
		// 스코프 영역 안이 우선순위가 높게 된다.
		// 스코프 영역 안에서 생성된 변수는 그 해당 스코프 안에서만 활용 가능하다.
		// 스코프(함수의 영역)


		// console.log(scope);	// 20


		// 호이스팅
		console.log(hoi);	//undefined	// 스코프 영역 안에서 생긴 변수로 인해 발생한 무제.
		var hoi = 40;
		console.log(hoi);	// 40;

		name2();	// 서로 다른 스코프 영역이기때문에 인식할 수 없다.

	}

	// 전역함수
	function name2(){
		// console.log(op);
	}

	// console.log(scope);	// 10

	name();	// 호출

	//////////////////////////////////////// 스코프 체인 //////////////////////////////////////////////
	// 중첩함수

	var a = 10;

	function outFunc(){	// 부모

		var b = 20;

		function inFunc(){	// 자식

			var c = 30;
			console.log(a+b+c);

		}
		return inFunc();
	}

	outFunc();		// 60

	// 콜백함수 ( 비동기 통신 );		// 자바스크립트의 꽃
	// '필요할 때만' 실행시키자
	// ex) 클릭 이벤트

	var doc = document;
	var sel = doc.getElementById('startBtn');



	sel.addEventListener('click',function(){

		moveRight(colorChange);

	});

	function moveRight(callback){	// 매개변수에 함수를 넣어

		var nemo1 = doc.getElementById('nemo1');
		var num = 1;	// 이동하는 거리	// 외부함수의 변수

		
		///////////////////// 클로저 영역 	/////////////////////
		setInterval(function(){

			num += 1;		// num은 private영역이 되어 moverRight함수가 한번 실행되도, 소멸되지 않고 유지된다. 유지가 되고 있기 때문에 더할 수있는 것이다.

			if( num > 300 ){

				callback();
				return;		// 질문
			}

			nemo1.style.left = num + 'px';

		},1);
		///////////////////// 클로저 영역 	/////////////////////
	}



	function colorChange(){

		var nemo2 = doc.getElementById('nemo2');
		nemo2.style.background = 'red';
	}

	function color(){

		var nemo2 = doc.getElementById('nemo2');
		nemo2.style.background = 'blue';
	}

	/*
	function(){
		function(){
			function(){
				function(){
					
				}
			}
		}
	}

	promise : 콜백을 조금 더 쉽게 만들어 주는 기능. 콜백을 좀 더 유연하게.

	이게 콜백의 기능. 쓰고 호출하고, 쓰고 호출하고, 쓰고 호출하고.

	실행하고 반드시 실행, 실행하고 반드시 실행, 실행하고 반드시 실행.

	*/

	// 여기까지 기억할 것: 콜백함수와 비동기/동기 기억!




	//////////////////////////////////////////////// 클로저 ////////////////////////////////////////////////
	// 외부함수의 변수에 접근할 수 있는 내부 함수를 말한다. 

	// 기본적으로 함수는 그 함수가 사용되고 나면 그 함수 내부의 변수는 소멸된다.

	/*
		1. func이 closer가 되면, 내부 변수들이 private 영역이 된다. 
		2. func에서 매개변수로 이한 호출이 되도 그 변수는 다시 생성되는게 아니고 유지되는 것이다.
		3. 클로저가 만들어지면서 내부 변수들은 유지되면서 상태값을 유지한다.
	*/

	function apple(){

		 var a = 10;
		 a += 20;

		 return a;
	}

	// console.log(apple());
	// console.log(apple());

	function ooo1(x){

		var num = 3;

		function ppp1(y){

			console.log( x + y + (++num));	// 한번 증가 시키고 사용 -> num : 4
		}
		ppp1(10);
	}

	ooo1(2);	// 16
	ooo1(2);	// 16
	ooo1(2);	// 16

	
	function ooo2(x){

		var num = 3;

		return function ppp2(y){	// return을 시킨다.	// return function이 되면 클로저가 된다.

			console.log( x + y + (++num));

		}

	}

	var k = ooo2(2);

	k(10);	// 16
	k(10);	// 17	// 부모의 num은 이미 소멸됨.


	// 스코프 영역
	// 스코프 체인( 중첩함수 )
	// 콜백함수( 기다렸다가 하려고 하는 것 ㄴ)
	// 클로저



});