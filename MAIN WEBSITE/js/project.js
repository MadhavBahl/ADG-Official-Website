var $cog = $('#imageFreshers'),
    $body = $(document.body),
    bodyHeight = $body.height();

$(window).scroll(function () {
    $cog.css({
        'transform': 'rotateX(' + ($body.scrollTop() / bodyHeight * 40) + 'deg)',
        'transform': 'rotateY(' + ($body.scrollTop() / bodyHeight * 110) + 'deg)' 
    });
});
