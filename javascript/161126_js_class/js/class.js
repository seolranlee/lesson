$(document).ready(function(){

	var doc = document;

	// 클래스(class)
	// 모듈(기능의 단위)


	// 사용자가 기능을 '선택할 때 마다'' 해당되는 모듈을 '비동기'로 부여해준다.


	/*

		기능단위(모듈)
		1. 상자의 랜덤 위치
		2. 위로 이동하는 기능
		3. 아래로 이동하는 기능
		4. 왼쪽으로 이동하는 기능
		5. 오른쪽으로 이동하는 기능
		6. 정지하는 기능
		7. 원래 위치로 돌아오는 경우


	*/

	// 1. 상자를 랜덤 위치 시켜라
	// Math 수학적문법

	// Math.random();		// 랜덤숫자를 만든다. ( 0~1 사이의 숫자를 만든다. - 소수점 )
	// 0.1, 0.2, 0.234897128979

	//	console.log(Math.random());		// ()이니까 호출이다.

	// x축 0 - 550		// y축 0 - 450

	var con = doc.getElementById('container');
	var inner = doc.getElementById('inner');

	var xPos = Math.floor(Math.random() * 550);	// 정수화
	var yPos = Math.floor(Math.random() * 450);	// 전역변수

	inner.style.left = xPos + 'px';
	inner.style.top = yPos + 'px';

	// 2. 상자를 위로 이동하게 만들어라.

	var topBtn = doc.getElementById('top');

	// var right = doc.getElementById('right');

	// var currentX = inner.style.left;
	// numberX = parseInt(currentX);

	// right.addEventListener('click',function(){

	// 	numberX += 1;

	// 	inner.style.left = numberX + 'px';
	// });

	$('#top').on('click',function(){

		setInterval(function(){

			yPos -= 1;

			

			console.log(yPos);

			if(yPos < 0){
				return;
			}

			inner.style.top = yPos + 'px';


		},10);

	});

});