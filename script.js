$(document).ready(function() {
    $('.hidetext').hide()
    $('.more-info').on('click', function() {
        
        if ($('.btntext').text() === "Less Info") {
            $('.btntext').text("More Info");
        } else {
            $('.btntext').text("Less Info");
        }
        $('.hidetext').toggle()
    })
})