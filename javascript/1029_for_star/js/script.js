// 별그리는 숙제

var doc = document;

for( var star = 0; star < 5; star++ ){
	doc.write('*');
	doc.write('<br>');
}

doc.write('<br>');

for(var i = 0; i < 5; i++){

	for(var j = 0; j <= i; j++){
		doc.write('*');
	}
	doc.write('<br>');
}


doc.write('<br>');

for(var i = 5; i > 0; i--){

	for(var j = 0; j < i; j++){
		doc.write('*');
	}
	doc.write('<br>');
	
}