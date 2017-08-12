$(function() {
	$(function() {
		if($(document).height() <= $(window).height()) {
			$('footer').addClass('navbar-fixed-bottom');
		}
		$table = $('#sort-table');

		if($table.length) {
			$table.tablesorter({
				sortList: [[0, 0], [0, 1]]
			});
		}

		// input에 무언가가 입력되었을 때 이벤트를 발동한다 (keyup)
		$('.search-input').keyup(function() {
			
			// input에 입력된 걸 변수화한다
			// $.trim($input.val()).toLowerCase(), val()는 input의 value attribute의 내용이다.
			$searchKey = $(this).val().trim().toLowerCase();
			
			// 테이블에 있는 내용을 변수화한다
			$rows = $('table tr');
			console.log($rows.length);
			$rows.show().filter(function() {
				// $row.text(), text()는 html의 컨텐츠이다.
				$trText = $(this).text().trim();
				// 입력된 내용과 테이블 내용을 비교 후 검색내용이 일부라도 일치하는 점이 없다면 테이블내의 row를 감춘다
				return $trText.indexOf($searchKey) == -1; 
			}).hide();
		});
	
		// 4.1 비교하는 함수
		// !~text.indexOf(val);
		// 4.2 감추는 함수
		// filter().hide()

		// var $rows = $('table tr');
		// $('.search-input').keyup(function() {
		// 	var val = $.trim($(this).val()).replace(/ + /g, ' ').toLowerCase(); // / + g, ' ' ???
		// 	$rows.show().filter(function() {
		// 		var text = $(this).text().replace(/\s + /g, ' ').toLowerCase();
		// 		return !~text.indexOf(val);	// !~ ??? 
		// 	}).hide();
		// });
	});
})(jQuery);