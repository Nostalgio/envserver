// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$('.accordion').accordionAnimated();

// Disable HTML5 number scrolling
$('form').on('focus', 'input[type=number]', function (e) {
    $(this).on('mousewheel.disableScroll', function (e) {
        e.preventDefault();
    });
});
$('form').on('blur', 'input[type=number]', function (e) {
    $(this).off('mousewheel.disableScroll');
});

// Float 2-decimal format
function two_decimal(number) {
    // Round and format number values 00.00
    return parseFloat(number).toFixed(2);
}

// Float 1-decimal format
function one_decimal(number) {
    // Round and format number values 00.0
    return parseFloat(number).toFixed(1);
}

// Expand Sections
$('.expand-section').each(function() {
    var $title = $(this).find('legend');
    var $content = $(this).find('.expand-content');

    $title.on('click', function() {
        $content.toggle({
            complete: function() {
                if ($(this).is(':visible'))
                    $title.find('i').removeClass('fa-plus-circle').addClass('fa-minus-circle');
                else
                    $title.find('i').removeClass('fa-minus-circle').addClass('fa-plus-circle');
            }
        });
    });
});
