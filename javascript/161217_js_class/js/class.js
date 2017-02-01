$(document).ready(function(){

	var doc = document;

	// 클래스(class)
	// 모듈(기능의 단위)

	/*

		인스턴스(instance) : 큰 단위 기능
		멤버변수(프로퍼티-property) : 클래스 단위 안에 들어 있는 변수
		메소드(method) : 작은 단위의 기능
		this : 객체와 관련

	*/

	// 클래스 정의 ( class ) - 자바

	// 함수의 모음

	// 1. 이체( 함수 )
	// 2. 조회 ( 함수 )

	/*

		/////////////////////// 클래스 ///////////////////////

		함수(){		// 은행
	
			1. 함수
			2. 함수

		}

		/////////////////////// 클래스 ///////////////////////

		// 클래스를 사용하는 이유
		// 1. 전역적인 문제(충돌)
		// 2. 재사용 / 재활용

		// 와플의 틀 : 클래스
		// 와플의 틀을 한번 찍어서 나오는 것 : 인스턴스(하나의 기능)
		// 와플 틀에 안에 넣는 재료들 : 작은 기능들

	*/ 

	// 클래스를 만드는 3가지 방식

	// 1. 리터널 방식(잘 쓰지 않는다.(비교대비))

	var arr  = new Object();
	arr.name = "오해영";

	// 리터널 방식(속도가 조금 더 빠르다.)
	var obj = {

		name : "이쁜오해영"

	}

	console.log(obj.name);

	// 객체( 데이터의 묶음 - 정보들을 담고 있는 하나의 큰 덩어리 )


	// 클래스가 된 게 아니고 클래스처럼 활용 하려고 하는 함수(자바스크립트는 클래스를 지원하지 않는다. '클래스 처럼' 쓸 뿐.)
	var Rectcontrol = {
	// 클래스로 쓰게 될 경우 객체와 구분하기 위해 이름의 첫자를 대문자로 정한다.

		name : '그냥오해영',	// 멤버변수
		age : 30,	// 멤버변수
		info : function(data){	// 메소드

			console.log(data + this.name + '나이는' + this.age);
			// 객체 안에서 this를 사용할 때, this는 객체 그 자체(자기 자신)가 된다.
			// this가 없이 name, age가 되면 전역에 있는 name, age라는 변수를 찾는다.
		},


	}

	console.log(Rectcontrol.name);
	console.log(Rectcontrol.age);
	Rectcontrol.info('에릭');

	// 클래스의 과정을 거쳐서 나오는 결과물 : 인스턴스

	// document.getElementById();
	// document : 객체덩어리
	// getElementById : 메소드
	// () : 매개변수를 삽입




	// 기능을 구현



	// 클래스를 생성
	var NemoControl = {	// 사실상 저 NemoControl도 전역이다.

		inner : doc.getElementById('inner'),		// 클래스 안에서의 전역의 역할을 한다.
		// 멤버변수 : 클래스 단위 안에 들어있는 변수
		xPos : 0,	
		yPos : 0,
		rxPos : 0,
		ryPos : 0,
		move : null,	// object가 들어갈 거다. (object 초기화)
		isMoving : false,	// Flag방식(굉장히 많이 사용한다)
		dist : 0,	// 멤버변수로 만든다
		

		init : function(){	// 메소드

			var con = doc.getElementById('container');		// 한번만 쓴다. 전역으로 쓸 필요 X
			
			this.xPos  = Math.floor(Math.random() * 550);	// 정수화
			this.yPos = Math.floor(Math.random() * 450);
			
			inner.style.left = this.xPos + 'px';
			inner.style.top = this.yPos + 'px';

			// alert(this.xPos);
			// alert(this.yPos);

			this.rxPos = this.xPos;	// 'this'.rxPos다.
			this.ryPos = this.yPos;	// 'this'.ryPos다.

			
			
			// alert(NemoControl.rxPos);
			// alert(NemoControl.ryPos);

		},
		// init(e)

		topBtn : function(){

		
			var topId = doc.getElementById('top');
			NemoControl.dist = this.yPos;	// function 안에서 써야하기 때문에 새로운 변수를 만들어 넣어준 것.
			


			topId.addEventListener('click',function(){	// 이 함수 안에 this가 들어오게 되면 this는 이 객체의 this가 아니라 이 함수의 this를 가리키게 된다.

				if( NemoControl.isMoving ){	// 이 위치를 잘 알아둬!
					clearInterval(move);
				}

				// console.log(NemoControl.isMoving);	// this.isMoving은 안돼
				NemoControl.isMoving = true;

				/////////////////////////// 클로저 ///////////////////////////
				move = setInterval(function(){

					NemoControl.dist = NemoControl.dist - 1;	// 클로저가 되면서, num은 private가 된다.

					if( NemoControl.dist < 0){

						clearInterval(move);
						// NemoControl.isMoving = false;
						return;
					}

					inner.style.top = NemoControl.dist + 'px';
				},10);
				/////////////////////////// 클로저 ///////////////////////////
			});
		},
		// topBtn(e)

		botBtn : function(){

			

			var botId = doc.getElementById('bottom');
			NemoControl.dist = this.yPos;	// function 안에서 써야하기 때문에 새로운 변수를 만들어 넣어준 것.
			
			botId.addEventListener('click',function(){	// 이 함수 안에 this가 들어오게 되면 this는 이 객체의 this가 아니라 이 함수의 this를 가리키게 된다.

				console.log(NemoControl.isMoving);

				if( NemoControl.isMoving ){	// 이 위치를 잘 알아둬!
					clearInterval(move);
				}

				// console.log(NemoControl.isMoving);	// this.isMoving은 안돼
				NemoControl.isMoving = true;
				

				/////////////////////////// 클로저 ///////////////////////////
				move = setInterval(function(){

					NemoControl.dist = NemoControl.dist + 1;	// 클로저가 되면서, NemoControl.dist은 private가 된다.



					if( NemoControl.dist > 450){

						clearInterval(move);
						// NemoControl.isMoving = false;
						return;
					}

					inner.style.top = NemoControl.dist + 'px';
				},10);
				/////////////////////////// 클로저 ///////////////////////////



			});

		},
		// botBtn(e)

		rollBack : function(){

			var back = doc.getElementById('back');

			back.addEventListener('click',function(){

				clearInterval(move);
				inner.style.left = NemoControl.rxPos + 'px';
				inner.style.top = NemoControl.ryPos + 'px';

				NemoControl.dist = NemoControl.ryPos;

			});

			
			// addEventListener(e)
		}
		// rollBack(e)


	}


	NemoControl.init();	// 인스턴스 실행
	NemoControl.topBtn();
	NemoControl.botBtn();
	NemoControl.rollBack();

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


	// 클래스 방식 두번째
	// 함수 방식

	function FrontEnd(){

		this.tool = 'brackets';	// new가 붙는 순간 프로퍼티
		this.view = function(){	// new가 붙는 순간 메소드
			console.log(this.tool);
		}


	}
	// FrontEnd(e)



	var fe = new FrontEnd();		// new연산자가 앞에 붙으면 함수가 객체화된다.

	// var fe = {

	// 	tool = 'brackets';
	// }

	console.log(fe.tool);
	fe.view();





	// 클래스 마지막 방식(제일 많이 쓰는 방식)
	// 굉장히 파워풀한 방식: 클래스에 대한 관리가 용이하다.
	// 상속이 가능하다.


	function Phone(){		// 클래스로써의 역할로 함수를 활용할 것이다.

		this.apple = "iphone";
		this.samsung = "galaxy";
	}

	Phone.prototype.showPhone = function(){
	// showPhone이라는 메소드 생성
	// 분리되어있어.
	// prototype은 예약어. 약속어. 이미 지정되어있는 명령어.

		console.log('애플은 ' + this.apple + '삼성은 ' + this.samsung);	// 상속이 가능하다.
	}

	var brand = new Phone();	// Phone이라는 함수는 객체화 된 것이다.

	console.log(brand.apple);
	console.log(brand.samsung);

	brand.showPhone();


	// 결론: 객체여야 한다. 객체에서 값을 가져오는 원리.
	// 그래서 객체 지향이라 한다.


});



// this
var data = 10;		// 전역변수 10

function open(){

	this.data = 20;	// 이 this는 window가 된다.	// 곧 다시 말해 전역변수가 된다.
	data = 30;		// var가 없기 때문에 전역변수의 30이 된다.

	console.log(data);	// 30
	console.log(this.data);	// 30	// open이 객체가 아니기때문에 그것보다 위의 객체를 찾는다. 그게 바로 window
	console.log(window.data);	// 30
}

// var open = new open();	// open을 객체로 만들어 줬음.
// 이렇게 하게 되면 30, 20, 30이 찍힌다.

open();