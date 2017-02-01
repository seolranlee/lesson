// 주석처리(한줄 주석 처리)
/* 블럭 주석 처리 */
/*
    //블럭 주석 처리(권장하진 않음)
*/



// 자바스크립트를 웹에서 사용할 때의 패턴

// 대상선택 - 특정시점(행위가 발생하는 시점) - 기능수





// 기본적으로 표준작업의 기준은 ie10이상
// ie8이나 낮은 버전의 브라우저에서는 실행이 안되거나 추가로 작성을 해야 할 부분이 발생

window.onload = function(){

	// addEventListener
	document.getElementById('box1').addEventListener('click',function(){
			alert('everybody coding');
	});

	// ie미표준 브라우저

}