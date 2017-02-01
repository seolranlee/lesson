// 절치지향 프로그래밍(말그대로 순서대로 주르륵 쓰는것 존나무식한 방법이다!!!!)
// 내 머리속에 있는거 걍 주르륵 나열하는거..
// 전역개념을 사용해서 프로그래밍

$(document).ready(function(){

	$('.pop1').on('click',function(){
		
		func1(num1);
	});

	$('.pop2').on('click',function(){
		
		func2(num2);
	})

});

var num1 = 10;	// 전역변수	// 정보
var num2 = 20;	// 전역변수	// 정보


// 기능 - 전역함수
function func1(data){

	alert(data);
}

// 기능 - 전역함수
function func2(data){

	alert(data);
}

// 언제든지 충돌의 위험이 있음.
// 내가 만든 기능이 변수를 보호해 주지 못하게 때문에 기능에 문제가 생길 요지가 높음.
// 이를 위해 클래스(사용 방법)와 같은 방법들을 사용


/////////////////////////////////// 객체지향 프로그래밍 ///////////////////////////////////
// 자바(JAVA) - 객체지향언어(객체의 개념을 지향해서 프로그래밍한다.)
// 오브젝트-C, php, python, java

// 자바스크립트
// 객체지향 프로그래밍 개념이 없어 (객체지향 문법이 없다(클래스, 퍼블릭, 프라이빗, 캡슐, 상속 등등))
// 객체(object)지향 프로그래밍 방식 처럼 함수를 사용한다.

/*

	객체지향프로그래밍
	
	1. 추상화 : 
	2. 캡슐화 : 기능을 보호해주기 위해
	3. 상속 : 반복되는 기능을 상속받음으로써 해결
	4. 다형성 : 코드의 재상용을 위해서
	5. 합성


*/

// 1. 추상화
// 컴퓨터 과학에서 추상화(abstraction)는 복잡한 자료, 모듈, 시스템 등으로부터 핵심적인 개념 또는 기능을 간추려 내는 것을 말한다.

// 객체들의 공통적인 프로퍼티(멤버변수)와 메소드를 뽑아내는 과정
// 내부 설계도



/*

	TV ( 객체 )

	프로퍼티(정보)
	--------------------------------
	모델명
	인치(해상도)


	메소드(기능)
	--------------------------------
	전원();
	볼륨();
	채널();
	녹화();		(잘못된 추상화)

	==================================

	세탁기(객체)

	프로퍼티(정보)
	--------------------------------
	모델명
	제조사
	용량

	메소드(기능)
	--------------------------------
	켜기();
	끄기();
	일시정지();
	탈수();

	// 새롭게 추가된 기능들
	건조기능();
	살균기능();


*/
// 리터널 방식 클래스 생성 방법
var Drum = {

	company : '제조사',
	size : '용량',

	on : function(){ '켜기' },
	off : function(){ '끄기' },
	pause : function(){ '일시정지' },
	talsoo : function(){ '탈수' },


	dry : function(){ '건조기능' },
	ion : function(){ '살균기능' },
}


// 프로토타입 형식의 클래스 생성 방법
function Tongdoli(){	// 얜 아직 함수야.

	this.company = '제조사';
	this.size = '용량';
}

Tongdoli.prototype.power_on = function(){ console.log('켜기'); };
Tongdoli.prototype.power_off = function(){ console.log('끄기'); };


$(document).ready(function(){

	var wahser = new Tongdoli();	// Tongdoli이라는 함수를 객체화시킨다. (지금부터 사용하겠다.)

	console.log(wahser.company);

	$('.on').on('click',function(){

		wahser.power_on();
	});

	$('.off').on('click',function(){

		wahser.power_off();
	});

});

// ------------------------------------추상화를 해서 코드화 시킴------------------------------------

// 2. 캡슐화

// public, private
// 알약
// 캡슐화를 사용하기 위해서는 프로퍼티 앞에 _(언더바)를 붙이고 사용하면 암묵적인 약속으로 캡슐화를 적용한다.

function Tv(){

	this._company = '삼성전자';	// Tv의 속성을 대표하는 중요한 변수
	this._size = '50인치';	// Tv의 속성을 대표하는 중요한 변수

	// 변수 앞에 _를 붙이면 이 변수는 바꾸면 안되는 변수라는 암묵적인 약속이 된다.

}

var tv = new Tv();		// 객체화
tv.company = 'LG전자';	// 너무나도 중요한 변수에 쉽게 접근할 수 있는 구조.(아주 큰 문제다.)
// 클래스 내부의 멤버변수를 맘대로 조작할 수 있다.


console.log(tv.company);


// ===============================================================

function Television(){

	// ======================= 캡슐화=======================

	// this._company = '삼성전자';
	var _comapny = '삼성전자';	// 이 순간 이 변수는 private한 변수가 된다.
	// 밖에서 사용할 수 없다.
	// var에 접근할 수 없으니까.
	// 변수로 작성(var 변수이름)하게 되면 외부에서 접근이 안되는거.
	 var _size = "50인치";

	// ======================= 캡슐화=======================

	// 밖에서 '쓸 수만'있게 허락해줘야한다.
	this.getCompany = function(){	// this가 되어있기 때문에 외부에서 접근 가능

		return _comapny;
	};

	// 우회한다는 느낌

	this.getSize = function(){	// this가 되어있기 때문에 외부에서 접근 가능

		return _size;
	};

	this.setSize = function(data){

		_size = data;

		return _size;


	};

}

var television = new Television();	// 객체화

television.setSize('49인치')
console.log(television.getSize());	
console.log(television._size); // 참조를 못하게 된다.



// 3. (클래스의)상속

// prototype
// 함수를 생성자(new)로 만들면 객체가 리턴(객체가 되서 돌아온다)된다.
// 기본적으로 그 때 prototype이라는 프로퍼티가 생성된다.
// 각종 프로퍼티와 메소드가 들어간다.

function Func(){

}	// 순수한 함수

console.log(Func);
console.log(Func.prototype);	// 자동적으로 생성된 prototype 프로퍼티
// 함수이기 때문에 직접적으로 접근 못하니까 프로토타입 안에 저장해두고 접근.

Func.prototype.exam = 10;	// 자동적으로 생성된 prototype이라는 프로퍼티 안에 각종 프로퍼티와 메소드를 넣는다.

Func.prototype.exam2 = function(){};


console.log(Func.prototype);

var pro = new Func();	// 실제 프로토를 사용하기 위해서 함수를 객체화 시켜서 접근.


console.log(pro);
console.log(pro.exam);




// 프로포타입과 상속

// 클래스
function Parent(){

	this.num = 10;
}

// 클래스
function Child(){

	this.num2 = 30;
}

Child.prototype = new Parent();		// 상속

Child.prototype.plus = function(){

		return this.num + this.num2;		// 상속이 먼저 되야 this.num이 참조가능.
}

console.log(Child.prototype);

var ch1 = new Child();

console.log(ch1.plus());



// 세탁기를 상속해서 만들기


function washer(){

	this.company = '제조사';
	this.size = '용량';

	this.on = function(){ return '켜기' };
	this.off = function(){ return '끄기' };
	this.pause = function(){ return '일시정지' };
	this.talsoo = function(){ return '탈수' };

}

function newWasher(){

	this.dry = function(){ return '건조기능' };
	this.ion = function(){ return '살균기능' };

}

newWasher.prototype = new washer();		//상속

var newWash = new newWasher();	// 객체화

console.log(newWash.on());
console.log(newWash.dry());


// 자식이 부모의 매개변수에 접근하기
function Pp(param){

	this.data = param;
}

Pp.prototype.dd = function(){

	console.log(this.data);
}

function Cc(param2){

	Pp.call(this,param2);		// 자식이 부모한테 매개변수를 전달해 줄 수 있는 방법

}

Cc.prototype = new Pp();		// 상속

var cc = new Cc('데이터');
cc.dd();

console.log(cc);


// 4. 다형성

// 코드 재사용을 위해서

function Da(){

	this.num1 = 30;
	this.num2 = 20;
}

Da.prototype.plus = function(){	// 플러스 기능은 자주 사용하는 기능이므로 하나의 클래스에 묶여있는 것은 비효율적이다.

	return plus(this.num1, this.num2);	// 사용만 한다.
}

Da.prototype.minus = function(){

	return minus(this.num1, this.num2);		// 사용만 한다.
}


// 클래스가 아닌 함수로써의 역할
function plus(num1, num2){ return num1 + num2; }


// 클래스가 아닌 함수로써의 역할
function minus(num1, num2){ return num1 - num2; }


// var a = {};	// var a = new Object();
var da = new Da();

console.log(da.plus());

console.log(da.minus());


// 정리


// 왜 쓰느냐가 중요한거.

// 1. 추상화
// 2. 캡슐화
// 3. 상속(프로토타입)
// 4. 다형성
// 5. 합성