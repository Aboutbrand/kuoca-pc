jQuery(document).ready(function() {
	/* 추천상품 순위 morenvy 정환 */
	jQuery('.xans-product-listrecommend ul.grid2 .thumbnail .num').each(function(index) {
		jQuery(this).append('0' + (index + 1));
	});

	/* 신상품 순위 morenvy 정환 */
	jQuery('.xans-product-listnew ul.grid2 .thumbnail .num').each(function(index) {
		jQuery(this).append('0' + (index + 1));
	});
});

