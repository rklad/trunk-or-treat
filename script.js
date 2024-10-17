$(document).ready(function() {
    $('.hidetext').hide()
    $('.more-info').on('click', function() {
        
        if ($('.btntext').text() === "Less Info") {
            $('.btntext').text("More Info");
        } else {
            $('.btntext').text("Less Info");
        }
        $('.hidetext').slideToggle()
    })

    $('.description').hide()

    $('.showcase').on('mouseenter', function() {
        $(this).find('.description').fadeIn()
    }).on('mouseleave', function() {
        $('.description').fadeOut()
    })

    $('.schedule1').hide()

    $('.schedule').on('click', function(event) {
        $('.schedule1').not($(event.target).next()).slideUp()
        $(event.target).next().slideToggle();
    })

})