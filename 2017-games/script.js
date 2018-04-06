$(document).ready(function(){
    /* For menu items to display */
    $('.list-group-item-icon').click(function(){
        $('#menu').toggle();
    });
    /*For smoothscroll to anchors */
    $('a').on('click', function(event) {
        // Start if
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        } // End if
    });
});