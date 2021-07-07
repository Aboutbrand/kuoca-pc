jQuery(document).ready(function() {
	/* morenvy.com 메인이미지 정환 */
	var swiper1 = new Swiper('.swiper1', {
		spaceBetween: 0,
		slidesPerView: 1,
		loop:true,
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination1',
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
	});
});



