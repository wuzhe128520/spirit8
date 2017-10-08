$(window).on("scroll", function() {
    var $window = $(this),
        $nav = $("#nav"),
        winHeight = $window.height()
        navHeight = $nav.height(),

        //滚动条距离窗口的距离
        scrollTop = $window.scrollTop();

        if(scrollTop >= 750 - navHeight) {
            $nav.addClass("on");
        } else {
            $nav.removeClass("on");
        }
});