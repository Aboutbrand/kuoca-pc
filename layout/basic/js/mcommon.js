jQuery(document).ready(function() {

	/* 검색 팝업 */
	jQuery("#icon_search").bind('click', function(e) {
		e.preventDefault();
		jQuery('#quick_search').bPopup({
			follow: [true, true],
			closeClass : '.quick_searchClose',
			modalClose: true,
			modalColor : '#fff',
			opacity: 0.9,
			transition : 'fadeIn'
		});
	});

	/* 카테고리 SHOP버튼 토글.  정환 */
	jQuery('.left_shop_btn').mouseenter(function(){
		jQuery("#category").css('display', 'block');
		jQuery(".left_shop_btn > a").addClass('on');
	}).mouseleave(function(){
		jQuery("#category").css('display', 'none');
		jQuery(".left_shop_btn > a").removeClass('on');
	});

	/* 상단 멤버 토글.  정환 */
	jQuery('.right_area .icon_menber').mouseenter(function(){
		jQuery("> ul", this).css('display', 'block');
	}).mouseleave(function(){
		jQuery("> ul", this).css('display', 'none');
	});

	/* 전체 게시판 적립금아이콘 수정  정환 */
	jQuery('#mileage_icon a').html("적립금주기");
});


