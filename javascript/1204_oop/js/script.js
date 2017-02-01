// 프로토타입

var a = {
	num : 10,
}

a.num;

function Name(){

	this.me = 100;
}

Name.prototype.number = 10;
Name.prototype.plus = function(){};


var open = new Name();
// 객체로 리턴 받으면 _proto_를 통해서 원래 함수의 prototype 프로퍼티를 참조하게 된다.
// 바라본다.
// 참조가 가능해지기때문에 객체화시키는거다.


open.me = 50;	// 자신의 객체의 멤버변수 me에 직접적으로 넣어주게 된다.
console.log(open.me);

var close = new Name();



// 이미지 정렬 기능
// 추상화 하는 작업 그 자체가 제일 어려운 일

// 절차지향 프로그래밍

$(document).ready(function(){

	// alert(Math.random()*200);

	// jQuery를 사용하는 이유: DOM control이 편해서

	$('#horizontal').on('click',function(){

		horizontal();	// 함수의 호출
	});

	$('#vertical').on('click',function(){

		vertical();	// 함수의 호출
	});

	$('#random').on('click',function(){

		random();	// 함수의 호출
	});

	$('#grid').on('click',function(){

		grid();	// 함수의 호출
	});

});

// 전역변수
var doc = document;
var imgtag = doc.getElementsByTagName('img');		// 배열로써 저장된다.


// 전역함수
function horizontal(){

	for(var i = 0; i < imgtag.length; i++){

		var x = i*200;

		imgtag[i].style.left = x + 'px';
		imgtag[i].style.top = '0px';
	}
}


function vertical(){

	for(var i = 0; i < imgtag.length; i++){

		var y = i*270;

		imgtag[i].style.top = y + 'px';
		imgtag[i].style.left = '0px';
	}
}


function random(){

	// Math.random();		0 ~ 1 사이의 숫자를 반환해준다.
	// x축 0-200
	// y축 0-270


	for(var i = 0; i < imgtag.length; i++){

		var x = Math.random()*200;
		var y = Math.random()*270;

		imgtag[i].style.top = y + 'px';
		imgtag[i].style.left = x + 'px';
	}

}


/*

(0,0)		/	(200,0)		/	(400,0)
(0.270)	/	(200,270)		/	(400,270)
(0.540)	/	(200,540)		/	(400,540)

*/


// 다른 사람이 만든 수식을 내가 보고 이해는 할 수 있어야해.
// 내걸로 만들어야 한다...ㅂㄷㅂㄷ


function grid(){

	var count = 3;

	for(var i = 0; i < imgtag.length; i++){

		var x = (i % count) * 200;	// % : 나머지의 개념
		var y = parseInt(i / count) * 270;		// 소수를 정수화시킨다.

		imgtag[i].style.top = y + 'px';
		imgtag[i].style.left = x + 'px';

	}


}


