$(function() {

	var clickEvent = false;
	$('#blogCarousel').carousel({	// carousel 애니메이션
		interval: 4000				// carousel 4초 주기로 이동
	}).on('click', '.list-group li', function() {		// 각 리스트 아이템 클릭 시
		clickEvent = true;								// 클릭 boolean = true
		$('.list-group list').removeClass('active');	// 모든 item active 지우기
		$(this).addClass('active');						// 클릭된 item만 active 추가
	}).on('slid.bs.carousel', function(e) {				// carousel 이 끝까지 이동했을 때
		if(clickEvent == false) {						// carousel이 끝난순간 클릭을 안했다면
			var count = $('.list-group').children().length - 1;			// active를 걸 객체를 제외한 나머지 item 갯수
			var current = $('.list-group li.active');					// 현재 활성화 된 item
			current.removeClass('active').next().addClass('active');	// 현재 활성화 되어있는 item의 active를 지우고 다음 item에 active 추가
			var iId = parseInt(current.data('slide-to'));				// active가 지워진 item의 slide-to 가 가리키는 item의 번호를 구함
			if(count == iId) {											// item번호가 active걸 객체를 제외한 count와 동일하다면
				$('.list-group li').first().addClass('active');
			}
		}
		clickEvent = false;
	});
});

$(window).load(function() {
	var boxHeight = $('#blogCarousel .carousel-inner').innerHeight();
	var itemLength = $('#blogCarousel .item').length;
	var triggerHeight = Math.round(boxHeight / itemLength + 1);

	$('#blogCarousel .list-group-item').outerHeight(triggerHeight);
});