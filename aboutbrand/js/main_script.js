(function ($) {
    var jQuery = $;

    var init = true;
    $(document).ready(function () {
        /* 메인상품이 1개 이상일때 실행   */
        $(".main-swipe-roll .swiper-wrapper").each(function () {
            var swiperslidelength = jQuery('.swiper-slide', this).length;

            if (swiperslidelength > 1) {
                var swiper2 = new Swiper('.main-swipe-roll', {
                    slidesPerView: 'auto',
                    autoHeight: true, //enable auto height
                    spaceBetween: 0,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.pagination-main-roll',
                        type: 'progressbar',
                    },
                });
            }

            var swiper1 = new Swiper('.swiper1', {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
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

        $(document).ready(function () {
            $("li[data-swiper-slide-index]").each(function () {
                $(this).hover(function () {
                    $(this).find(".quickView a").addClass('hovered');
                }, function () {
                    $(this).find(".quickView a").removeClass('hovered');
                });
            });
        });
    });


// Top banner setting
    function runTopbanner() {

        var closeChk = sessionStorage.getItem('bannerClose');

        if (!closeChk) {

            $('.jsTopSlide').addClass('on');
            $('.top-banner__item').each(function () {
                var getBg = $(this).find('span').text();
                $(this).css('backgroundColor', getBg);
            });

            var topSlide = new Swiper('.jsTopSlide', {
                loop: true,
                speed: 1400,
                effect: 'fade',
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
            });
        }

        $('.jsTopBannerClose').on('click', function () {
            $('.jsTopSlide').slideUp().addClass('disabled');
            sessionStorage.setItem('bannerClose', true);
        });
    }

    $(function () {
        runTopbanner();
    })
})(aboutbrandScript);