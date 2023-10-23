
$(document).ready(function() {
    AOS.init();
    let lastScrollTop = 0;
    let lastTime = Date.now();
    $(window).on('scroll', function() {
        let currentTime = Date.now();
        let timeDifference = currentTime - lastTime;
        let currentScrollTop = $(this).scrollTop();
        let scrollDifference = Math.abs(currentScrollTop - lastScrollTop);
        let velocity = scrollDifference / timeDifference;
        let animationDuration = Math.max(300, 2000 - (velocity * 2000));
        AOS.refreshHard();
        $('.aos-animate').css('transition-duration', animationDuration + 'ms');
        lastScrollTop = currentScrollTop;
        lastTime = currentTime;
    });
});
