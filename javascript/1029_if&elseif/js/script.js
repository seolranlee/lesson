/*
	
	회원가입

	1. 아이디입력
	2. 비밀번호 입력
	3. 다시 한번 비밀번호를 입력하면서 처음 비밀번호와 동일한지 체크
	4. 회원가입 완료

*/



/*

	처음 HTML이 열리면서 CSS JS를 가지고 온다.
	이들은 분산처리를 한다.(병렬로써)
	그렇기 때문에 window.onload를 써주지 않으면 에러가 뜨게된다.
	(HTML이 다 로딩된 다음에  css와js를 읽어)

	혹은 js 밑으로 뺀다.

*/

var doc = document;
var regsiter = doc.getElementById('register');


regsiter.addEventListener('click',function(){

	
	var user_id = doc.getElementById('user_id').value;
	// input태그이기 때문에 value값을 가져올 수 있다.
	var user_pass = doc.getElementById('user_pass').value;
	var user_pass_comfirm = doc.getElementById('user_pass_comfirm').value;

	// 1. 사용자가 아이디를 입력하지 않았을 경우
	if( !user_id ){
		
		alert('아이디를 입력해주세요.');
		doc.getElementById('user_id').focus();
		return;
		// return false;	// 질문2

	// 2. 사용자가 비밀번호를 입력하지 않은 경우
	} else if ( !user_pass || !user_pass_comfirm ){
		alert('비밀번호를 입력해주세요.');	
		if(!user_pass){
			doc.getElementById('user_pass').focus();
		}else{
			doc.getElementById('user_pass_comfirm').focus();
		}
		return;

	// 3. 비밀번호가 서로 다를 경우
	} else if( user_pass != user_pass_comfirm ){
		alert('비밀번호를 다시 확인해주세요.')
		doc.getElementsByTagName('input')[0].value = '';	//질문3
		// doc.getElementsByTagName('input').innerHTML = '';
		return;

	}

	// 마지막으로 꼼꼼하게 한번 더 확인

	if( user_id && user_pass && user_pass_c ){
		alert('회원가입이 완료되었습니다.');
	}

	// validation check ( 예외처리 )

	/*
		if(id_value == null){	// 질문1
			alert('아이디를 입력하세요');
		}

		null은 console로 확인할 수 있음.

	*/


});
