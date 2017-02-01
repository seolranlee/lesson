// 전자계산기
// 1. 각 버튼의 클릭 기능을 넣어준다.
// 2. 각 버튼의 동작 기능이 다르기 때문에에 함수를 그 동작들이 지원할 수 있게 구성해야 한다.
// 3. 각 버튼을 클릭 시 화면에 알맞게 보여 준다.

var doc = document;
var button = doc.getElementsByTagName('button');

// console.log(button);

for( var i = 0; i < button.length; i++ ){

	button[i].addEventListener('click',btnFunc);
	// btnFunc
	// 함수를 호출만 할 때에는 함수명만 써줘야한다. 인자값을 전달해주고 싶을때는 
	// function(){btnFunc(10);} 라고 써야한다.

}


// 클릭된 버튼을 각 기능별로 나눠주는 역할(숫자냐/연산자냐/결과값이냐/초기화냐)
function btnFunc(){

	var func_select = this.innerHTML;
	console.log(func_select);


	// 분기
	/*
	if(func_select == '+' || func_select == '-' || func_select == '*' || func_select == '/'){

		calFunc();

	} else if(func_select == '='){

		resFunc();
	
	} else if(func_select == 'C'){
 
		resetFunc();
	
	} else {

		numFuc();
	}
	*/

	// 자료형 변환
	// 조건문에 걸리고 수식이 걸릴 때 자동형변환이 된다.
	if(func_select >= 0 && func_select <= 9){	// 자동 형 변환된다.

		numFuc(func_select);

	} else {

		if(func_select == '='){
			resFunc();
		}else if(func_select == 'C'){
			resetFunc();
		}else{
			calFunc(func_select);
		}

	}
}

// 전체적으로 필요한 정보 (전역변수)
var inner = doc.getElementById('inner');
var result = doc.getElementById('result');
var four = doc.getElementById('four');
var total = 0;

// 숫자
function numFuc(number){

	console.log(number+'숫자입니다.');
	inner.value += number;

}


// 이전 연산자를 담기 위한 변수로 활용
var tmp;


// 연산자
function calFunc(data){

	console.log('연산자입니다.');
	four.value = data;

	if( !tmp ){
		total = Number(inner.value);

	} else{

		// 스위치-케이스 문
		// switch(값){}

		switch(tmp){	// 파라미터에 data가 아닌 tmp가 들어가야 하는 이유 잘 생각해봐.

			case '+' :
				// 더하기 기능
				total = total + Number(inner.value);
				break;
			case '-' :
				// 빼기 기능
				total = total - Number(inner.value);
				break;
			case '*' :
				// 곱하기 기능
				total = total * Number(inner.value);
				break;
			case '/' :
				// 나누는 기능
				total = total / Number(inner.value);
				break;
			// default: // 위에 해당하는 모든 케이스에 해당하지 않는 경우. else와 같은 기능
				// break;

		}	// switch문 끝

	}
	tmp = data;
	inner.value = '';	// 쓰고 나서 비워야하니까. 위치가 왜 여긴지 이해해.
	result.value = comma(total);

}

// 결과값
function resFunc(){

	console.log('결과입니다.');

	if( inner.value && result.value ){

		switch(tmp){	// 파라미터에 data가 아닌 tmp가 들어가야 하는 이유 잘 생각해봐.

			case '+' :
				// 더하기 기능
				total = total + Number(inner.value);
				break;
			case '-' :
				// 빼기 기능
				total = total - Number(inner.value);
				break;
			case '*' :
				// 곱하기 기능
				total = total * Number(inner.value);
				break;
			case '/' :
				// 나누는 기능
				total = total / Number(inner.value);
				break;
			// default: // 위에 해당하는 모든 케이스에 해당하지 않는 경우. else와 같은 기능
				// break;

		}	// switch문 끝

		result.value = total;
		inner.value = '';

	}

	


}


// 초기화
function resetFunc(){

	console.log('초기화입니다.');
	// result.value = total;
	total = 0;
	result.value = '';
	four.value = '';
	inner.value = '';
	tmp = '';

}



function comma(number){	// 15000000

	number = number.toString();	// "15000000"

	// 음수 판단
	var check = number.substring(0,1);	// 문자열 자르기(시작 인덱스, 끝 인덱스)

	number = number.replace('-','');	// 찾아바꾸기	// 양수화

	var third = 0;
	var leng = 0;
	var str = '';

	// 8
	third = number.length % 3;	// 나머지 연산자(나머지 반환)	// 2
	leng = number.lenggth; // 8

	str = number.substring(0,third);	// 15

	//      2       8
	while(third < leng){
		if(str != ''){
			//    15 + ,
			str = str + ',';
		}

		//   15,0000                     2      5   
		str = str + number.substring(third, third + 3);

		third = third + 3;
	}

	return str;


}
