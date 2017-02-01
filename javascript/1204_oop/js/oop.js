// 객체지향 프로그래밍

$(document).ready(function(){

	var gallery = new Gallery('img');		// 이 때 Gallery에서 리턴된다.
	// gallery.init();

	$('#horizontal').on('click',function(){

		// gallery.horizontal();
		// horizontal.align();
		gallery.show(horizontal);

	});

	$('#vertical').on('click',function(){

		gallery.show(vertical);
	});

	$('#random').on('click',function(){

		gallery.random();
	});

	$('#grid').on('click',function(){

		gallery.grid();
	});


});

// 1. 추상화

/*

	이미지 정렬 클래스
	
	1. 대상태그 - 프로퍼티

	기능
	1. 가로정렬();
	2. 세로정렬();
	3. 랜덤정렬();
	4. 바둑판정렬();


*/


// 2. 캡슐화

function TagList(){	// 태그들을 배열로 넣을 수 있게끔 해주는 클래스

	this._tag = null;	// 다른 태그들도 이 안에 넣을 수 있게 공통적으로 사용.
}

function Gallery(select){
	this.init(select);
}

Gallery.prototype = new TagList();	// 상속

Gallery.prototype.init = function(selector){		// 메소드 적재

	this._tag = document.getElementsByTagName(selector);		// 상속을 했기 때문에, _proto_를 통핸 부모 참조 가능.
}

// 합성
Gallery.prototype.show = function(alignable){

	alignable.align(this._tag);

}

// 다형성 : 코드를 빼서 어디서나 사용할 수 있게 한다.

var horizontal = {

	align : function(selectTag){

		for(var i = 0; i < selectTag.length; i++){

			var x = i*200;

			 selectTag[i].style.left = x + 'px';
			 selectTag[i].style.top = '0px';
		}


	}

}


var vertical = {

	align : function(selectTag){

		for(var i = 0; i < selectTag.length; i++){

			var y = i*270;

			selectTag[i].style.top = y + 'px';
			selectTag[i].style.left = '0px';
		}


	}

}



/*

Gallery.prototype.horizontal = function(){	// 메소드 적재

	for(var i = 0; i < this._tag.length; i++){

		var x = i*200;

		 this._tag[i].style.left = x + 'px';
		 this._tag[i].style.top = '0px';
	}
}

Gallery.prototype.vertical = function(){	// 메소드 적재

	for(var i = 0; i < this._tag.length; i++){

		var y = i*270;

		this._tag[i].style.top = y + 'px';
		this._tag[i].style.left = '0px';
	}
}

Gallery.prototype.random = function(){	// 메소드 적재

	for(var i = 0; i < this._tag.length; i++){

		var x = Math.random()*200;
		var y = Math.random()*270;

		this._tag[i].style.top = y + 'px';
		this._tag[i].style.left = x + 'px';
	}
}

Gallery.prototype.grid = function(){	// 메소드 적재

	var count = 3;

	for(var i = 0; i < this._tag.length; i++){

		var x = (i % count) * 200;	// % : 나머지의 개념
		var y = parseInt(i / count) * 270;		// 소수를 정수화시킨다.

		this._tag[i].style.top = y + 'px';
		this._tag[i].style.left = x + 'px';

	}
}

이 코드의 문제점 : Gallery에 종속되어있어. 전역적인 기능이 될 수 없다.

*/

