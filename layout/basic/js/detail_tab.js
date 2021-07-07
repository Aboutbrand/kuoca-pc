jQuery(document).ready(function() {
	/* 상세페이지에 추가이미지가 있을경우에만 스와이프 실행. morenvy 정환 */
	jQuery(".xans-product-detail .swiper6 .swiper-wrapper").each(function(){
		var swiperslidelength = jQuery('.swiper-slide',this).length; 

		if ( swiperslidelength > 1 ) {
			jQuery(".xans-product-detail .imgArea .swiper6").show();
			/* 상세썸네일 추가이미지 롤링 */
			var swiper6 = new Swiper('.swiper6', {
				spaceBetween: 15,
				slidesPerView: 4,
				navigation: {
					nextEl: '.swiper-button-next6',
					prevEl: '.swiper-button-prev6',
				},
			});
		}
	});
});