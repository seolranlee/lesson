$(document).ready(function(){

	// return값이 타입마다 다르게 박히는 이유
	// https://github.com/riahnrhyme/hanpixel-api-nodejs/blob/master/router/book.js

	$.ajax({

		type : 'GET',
		url : 'http://52.198.201.69/api/books/',
		success : function(data){	// 아작스에서 성공하면 data가 자동으로 매게변수안으로 들어와.

			$.each(data,function(index){

				var tr = $('<tr>');
				var td_book = $('<td>');
				var td_name = $('<td>');
				var td_time = $('<td>');
				var td_del = $('<td>').addClass('del');

				tr.attr('id',data[index]._id);
				td_book.text(data[index].title);
				td_name.text(data[index].author);
				td_time.text(data[index].published_date);
				td_del.text('삭제');

				tr.append(td_book).append(td_name).append(td_time).append(td_del);
				$('#booklist table tbody').append(tr);
			});

		},
		error : function(err){
			console.log(err);
		},


	});
	// 자바스크립트에서 {}는 객체


	// PST{S}
	// /api/books -> {data}
	$('#add').click(function(){	// post를 날리는 시점

		var title = $('#book_title').val();
		var author = $('#book_name').val();
		var published_date = $('#book_time').val();

		var book = {

			"title" : title,
      "author" : author,
    	"published_date" : published_date
		};	// https://github.com/riahnrhyme/hanpixel-api-nodejs/blob/master/public/javascripts/script.js

		$.ajax({

			type:'POST',	// POST방식
			url : 'http://52.198.201.69/api/books/',
			data : book,
			dataType : 'JSON',	// XML, TEXT, JSON 등의 형식이 있다.
			success : function(data){
				console.log(data);	// id값이 return된다.
				 if ( data ) {
            var tr = $('<tr>');
            var td_book = $('<td>');
            var td_name = $('<td>');
            var td_time = $('<td>');
            var td_del = $('<td>').addClass('del');

            tr.attr('id',data.result);
            td_book.text(title);
            td_name.text(author);
            td_time.text(published_date);
            td_del.text('삭제');

            tr.append(td_book).append(td_name).append(td_time).append(td_del);
            $('#booklist table tbody').append(tr);

            $('#book_title').val('');
            $('#book_name').val('');
            $('#book_time').val('');
        }
			},
			error : function(err){

			},




		});

	});
	// POST{E}

	// DELETE{S}

	$(document).on('click','.del',function(){	//동적으로 만들어진 태그에 이벤트를 걸어줄 때.
		
		var ids = $(this).parent().attr('id');
		var selector = $(this).parent();

		$.ajax({
			
			type: 'DELETE',
			url : 'http://52.198.201.69/api/books/' + ids,
			success : function(data){

				// $(this).parent().remove();	//this는 function마다 생김.
				selector.remove();
			},
			error : function(err){
				console.log(err);
			},

		});


	});



});