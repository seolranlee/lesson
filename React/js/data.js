// 백엔드 데이터베이스 서버
// 데이터 분류
// 제이데이터

// 글로벌이 들어가는 순간 전역변수가 된다는 나만의 법칙

var global_download = {

	count : 4,
	download : [

		{ url : 'basic1.zip',content : '[ HTML5 ]' },
		{ url : 'basic2.zip',content : '[ With CSS ]' },
		{ url : 'basic3.zip',content : '[ With JAVASCRIPT & JQUERY ]' },
		{ url : 'basic4.zip',content : '[ With React ]' },

	]

}

var global_nav = {

	count : 3,
	navmenu : [

		{ url : 'index.html', title: 'F' },
		{ url : 'practice.html', title: 'P' },
		{ url : 'download.html', title: 'D' },
	]
}

var global_class = {

	count : 7,
	class_title : [
	
		{ url : 'class01.html', classname : 'Part.1 - HTML with CSS' },
		{ url : 'class02.html', classname : 'Part.2 - HTML5 with CSS3' },
		{ url : 'class03.html', classname : 'Part.3 - Javascript Basic' },
		{ url : 'class04.html', classname : 'Part.4 - Javascript Advanced' },
		{ url : 'class05.html', classname : 'Part.5 - Web Project' },
		{ url : 'class06.html', classname : 'Part.6 - React' },
	]
}

var global_class_summary = {

	count : 3,
	summary : [
		{ title : 'Front End Develop', desc : '본 과정은 웹개발의 한 분야인 Front End 개발 과정입니다. HTML5와 CSS3 문법을 익히고, javascript를 활용한 라이브러리 와 프레임워크 에 대한 강의가 진행됩니다.' },
		{ title : 'Practice', desc : '연습입니다' },
		{ title : 'Download', desc : '다운로드입니다' },
	],

}

var global_part1_subject = {

	count : 9,
	subject_category : 'part1',
	subject_title : [

		{ url : 'subject01.html', date : 'Day 1', subjectname : 'part1-웹개발 환경 셋팅 / 웹 이란' },
		{ url : 'subject02.html', date : 'Day 2', subjectname : 'part1-Day 2HTML 문법 / HTML5 문법' },
		{ url : 'subject03.html', date : 'Day 3', subjectname : 'part1-HTML 컨텐츠 모델 / 요소이해' },
		{ url : 'subject04.html', date : 'Day 4', subjectname : 'part1-레이어 개념 과 박스 모델' },
		{ url : 'subject05.html', date : 'Day 5', subjectname : 'part1-CSS 기초문법' },
		{ url : 'subject06.html', date : 'Day 6', subjectname : 'part1-CSS 셀렉터 와 상속개념' },
		{ url : 'subject07.html', date : 'Day 7', subjectname : 'part1-HTML & CSS 활용법' },
		{ url : 'subject08.html', date : 'Day 8', subjectname : 'part1-웹 레이아웃 제작' },
		{ url : 'subject09.html', date : 'Day 9', subjectname : 'part1-리액트를 활용한 웹 레이아웃 제작' },

	]
	// subject_title
}

var global_part2_subject = {

	count : 3,
	subject_category : 'part2',
	subject_title : [

		{ url : 'subject01.html', date : 'Day 1', subjectname : 'part2-웹개발 환경 셋팅 / 웹 이란' },
		{ url : 'subject02.html', date : 'Day 2', subjectname : 'part2-Day 2HTML 문법 / HTML5 문법' },
		{ url : 'subject03.html', date : 'Day 3', subjectname : 'part2-HTML 컨텐츠 모델 / 요소이해' },

	]
	// subject_title
}


var global_part3_subject = {

	count : 5,
	subject_category : 'part3',
	subject_title : [

		{ url : 'subject01.html', date : 'Day 1', subjectname : 'part3-웹개발 환경 셋팅 / 웹 이란' },
		{ url : 'subject02.html', date : 'Day 2', subjectname : 'part3-Day 2HTML 문법 / HTML5 문법' },
		{ url : 'subject03.html', date : 'Day 3', subjectname : 'part3-HTML 컨텐츠 모델 / 요소이해' },
		{ url : 'subject04.html', date : 'Day 4', subjectname : 'part3-레이어 개념 과 박스 모델' },
		{ url : 'subject05.html', date : 'Day 5', subjectname : 'part3-CSS 기초문법' },

	]
	// subject_title
}