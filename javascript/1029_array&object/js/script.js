// 배열과 객체 !important

// 배열
// 자료(data)구조

// 순차적인 데이터의 묶음(순서가 있다.)

// 배열의 선언 ( 자료형 )
// array

// 배열의 순서는 항상 0 번 부터 시작한다. ( index );
// 리터널 방식 (리터널 : 보이는 그대로 쓴다. 직관적이다. )
var arr = [ 10, 20, 30 ];

// 객체방식
var arr2 = new Array( 10, 20, 30 );	// 변수 arr2에 배열의 공간을 만든다.
// var arrw = [];



// 리터널 방식을 자바스크립트에서 지원해주기 때문에 더 편하고 직관적이므로 더 자주 쓴다.


// console.log(arr);
// console.log(arr2);

console.log(arr[1] + arr[2]);


// 자료구조 !important
// 스택(stack) 큐(queue)

// 스택 : 데이터를 맨 뒤에 쌓고 필요할땐 맨 뒤에서 부터 뺀다.(후입선출)
// 큐: 데이터를 맨 뒤에 쌓고 필요할 땐 가장 앞쪽 부터 뺀다.(선입선출)

// 스택 구조
arr.push(40);	// push는 데이터를 맨 뒤에 넣는 기능을 한다.
arr.pop();	// pop은 데이터를 맨 뒤에서 부터 가지고 오는 기능을 한다.
arr.pop();

console.log(arr);


// 큐 구조
arr.push(100);
arr.push(200);
arr.shift();	// shift는 데이터를 맨 앞쪽에서 부터 가지고 온다.

// 별개
arr.unshift(300);	// unshift는 데이터를 맨 앞쪽부터 넣는다.

arr[10] = 500;
arr[10] = 400;


console.log(arr);
// length
console.log(arr.length);

// 다차원 배열
var arr3 = [ [ 10, 20 ], [ 30, 40 ], 100 ];

console.log(arr3[0][1]);
console.log(arr3[2]);
console.log(arr3[0].length);
console.log(arr3[2].length);	// 100은 배열이 아니라 길이라는 개념 자체가 없음.


// 객체(object)

// 순서가 없는 데이터의 묶음
// 객체는 키값과 벨류로 구성한다.
// 키(key) : 벨류(value) ( 데이터의 이름 : 데이터의 값)

// 리터널 방식
var obj = { a:10, b:20, c:30 };

// 객체 생성 방식
var obj2 = new Object({ a:10, b:20, c:30 }); 


console.log(obj.a);	// 값을 확인하는 방법. 키값을 활용하여.


obj.d = 40;	// 값을 넣는 방법.

console.log(obj);


// 퀴즈

var number = [ { a:40, b:50 }, { c:80, d:100 } ];

var total = number[0].b + number[1].c;
console.log(total);	// 130


var juwon = [ 10, 20, 30, 40, 50, 60, 70 ];

// document.write(juwon[0]);
// document.write(juwon[1]);
// document.write(juwon[2]);
// document.write(juwon[3]);
// document.write(juwon[4]);

var sum = 0;
var avg = 0;
for(var i = 0; i < juwon.length; i++){

	sum = sum + juwon[i];
	
}
avg = sum / juwon.length;

console.log(sum);
console.log(avg);



// 배운사람의 입장
var avg2 = juwon.reduce(function(a,b){ return a + b }) / juwon.length;
console.log(avg2);


// es6(에크마6)
var avg3 = juwon.reduce((a,b) => a + b) / juwon.length;
console.log(avg3);



// 배열
var inner = [ '1반', '2반', '3반', '4반' ];
var doc = document;
var ban = doc.getElementById('ban');


for( var i in inner ){	// 배열이 자동적으로 데이터만큼 for문을 돌아가게 해주는 것.

	var tag = doc.createElement('div');
	tag.innerHTML = inner[i];
	ban.appendChild(tag);
}



// 객체
var phone = {
	apple : '아이폰',
	samsung : '갤럭시',
	google : '픽셀'
};


var phone1 = doc.createElement('div');
var phone2 = doc.createElement('div');
var phone3 = doc.createElement('div');

phone1.innerHTML = phone.apple;
phone2.innerHTML = phone.samsung;
phone3.innerHTML = phone.google;

doc.getElementById('phone').appendChild(phone1);
doc.getElementById('phone').appendChild(phone2);
doc.getElementById('phone').appendChild(phone3);


// jason형태의 data(객체와 배열로 이루어진)

var student = {

	count : 4,
	class : [
		
		{
			name : '학생1',
			score : 80
		},
		{
			name : '학생2',
			score : 90
		},
		{
			name : '학생3',
			score : 100
		},
		{
			name : '학생4',
			score : 85
		}

	],
}



// student

// 내꺼
// var table = doc.createElement('table');
// var tbody = doc.createElement('tbody');
// var tr = [];
// var th = [];
// var td = [];

// doc.body.appendChild(table);
// table.appendChild(tbody);


// for(var i = 0; i < student.count; i++){
// 	tr[i] = doc.createElement('tr');
// 	tbody.appendChild(tr[i]);
	
// 	for(var j = 0; j < 1; j++){
	
// 		th[j] = doc.createElement('th');
// 		th[j].innerHTML = student.class[i].name;
// 		tr[i].appendChild(th[j]);

// 		td[j] = doc.createElement('td');
// 		td[j].innerHTML = student.class[i].score;
// 		tr[i].appendChild(td[j]);
// 	}


// }


// 쌤꺼
// SPA방식 ( single page application: 하나의 페이지에서 모든 기능 수행 )
// -> 속도향상. (특히, 모바일에서의 속도향상.)
var score_tble = doc.getElementById('score');
var table = doc.createElement('table');


for( var  i = 0; i < student.count; i++ ){	
// i앞에 var가 안붙으면 전역변수. var붙으면 그 for문 안에서만 도는 지역변수.
	var tr = doc.createElement('tr');
	var td_name = doc.createElement('td');
	var td_score = doc.createElement('td');

	// a = '<tr>';
	// a += '<td>' + value + '</td>';
	// a += '</tr>';

	td_name.innerHTML = student.class[i].name;
	td_score.innerHTML = student.class[i].score;

	tr.appendChild(td_name);
	tr.appendChild(td_score);
	table.appendChild(tr);
}

score_tble.appendChild(table);



