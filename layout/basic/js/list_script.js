(function ($) {
    var jQuery = $;
    $(document).ready(function () {
        $('.ec-base-product .spec').each(function () {

            if ($(this).find('li[rel="용량"]').length === 0) {
                $(this).find('li[rel="판매가"]').addClass('noCapa')
            }
            if ($(this).find('li[rel="할인판매가"]').length === 1) {
                $(this).find('li[rel="할인판매가"], li[rel="판매가"]').addClass('discount')
                $(this).find('li[rel="판매가"] span').hide();
            }
        })

        // 5월 공구 url 확인하여 별도의 스타일 적용
        var currentListUrlOrigin = $(location).attr('href').split('/');
        var currentListUrl = $(location).attr('href').split('/')[4];
        console.log(currentListUrlOrigin)
        console.log(currentListUrl)
        if(currentListUrl === "list.html?cate_no=47"){
            console.log('5월 공구 상품 목록 페이지')
            $('head').append('<link rel="stylesheet" type="text/css" href="/aboutbrand/css/list-cate47-public-sale.css">');
        } if(currentListUrl === "list.html?cate_no=58"){
            console.log('세트 상품 목록 페이지')
            $('head').append('<link rel="stylesheet" type="text/css" href="/aboutbrand/css/list-cate58.css">');
        } if(currentListUrl === "list.html?cate_no=59") {
            console.log('세트 상품 목록 페이지')
            $('head').append('<link rel="stylesheet" type="text/css" href="/aboutbrand/css/list-cate59.css">');
        }
    })
})(aboutbrandScript);
