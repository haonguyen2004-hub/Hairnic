﻿$(function () {
    $('.snazzymenu').snazzyMenu({
        theme: "",
    });

    AOS.init({
        once: true,
    });

    if ($('.flipdown').length > 0) {
        // Ngày kết thúc xác định (yyyy, mm ,dd, hh, mm, ss, ms)
        var endDate = new Date(2024, 6 - 1, 15, 20, 30, 0, 0);
        //Vì tháng trong js tính từ 0 nên phải -1
        // Tính thời gian còn lại
        var countdownDate = Math.floor(endDate.getTime() / 1000);

        var flipdown = new FlipDown(countdownDate);
        flipdown.start();
    }



    var $button = $.backToTop({
        backgroundColor: '#91bd7b',

    });

    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            10000: {
                items: 1
            }
        }
    })

    // Gán số vào phần dots
    $('.testimonial-carousel .owl-dot span').each(function (index, elem) {
        $(elem).html(index + 1);
    });

    // Xử lý nút btn-main-blog-ext
    $("#btn-main-blog-ext").on("click", function (e) {
        e.preventDefault();
        $(this).hide();

        $("#main-blog-ext").hide();
        $("#main-blog-ext").removeClass("d-none");
        $("#main-blog-ext").slideDown(1000);

        setTimeout(function () {
            $("#main-blog-ext").get(0).scrollIntoView();
        }, 1000)

    });
});