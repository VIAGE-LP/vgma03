$(document).ready(function () {
    // // 圖片lozad
    // const observer = lozad('.lozad', {
    //     rootMargin: "150px 0px"
    // });
    // observer.observe();
    // 立即購買btn動態
    $('.offerbtn, .offerbtn_m').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        }, 900);
    });
    // 立即訂購btn動態
    $('.buybtn').click(function (e) {
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').position().top,
        }, 200);
    });

    // $(window).scroll(function () {
    //     var scrollPos = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     var sizeTop = $('#size').position().top;
    //     var width = $(window).width();

    //     console.log("scrollPos:"+scrollPos,"windowHeight:"+windowHeight,"sizeTop:"+sizeTop,"width:"+width);
    //     // mac scrollPos:25003 windowHeight:363 sizeTop:25029.3125 width:1280
    //     // iphone scrollPos:18815 windowHeight:667 sizeTop:18817.21875 width:375
    //     // ipad scrollPos:33844 windowHeight:1024 sizeTop:33832.578125 width:768

    // });
    // var windowHeight = $(window).height();
    // var posTop = $('#size').position().top;
    // // var offsetTop = $('#size').offset().top;
    // var width = $(window).width();

    // if (width <= 768) {
    //     // 立即訂購btn動態
    //     $('.buybtn').click(function (e) {
    //         e.preventDefault();
    //         $('html , body').animate({
    //             // scrollTop: 25372,
    //             scrollTop: $('#size').position().top,
    //         }, 900);
    //     });
    // } else if (width > 768) {
    //     // 立即訂購btn動態
    //     $('.buybtn').click(function (e) {
    //         e.preventDefault();
    //         $('html , body').animate({
    //             // scrollTop: posTop,
    //             scrollTop: $('#size').position().top,
    //         }, 900);
    //     });
    // }
});