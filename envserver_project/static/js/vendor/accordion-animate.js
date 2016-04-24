(function($) {
    $.fn.accordionAnimated = function() {

        var $accordion = this,
            $items = $accordion.find('> dd'),
            $targets = $items.find('> .content'),
            options = {
                active_class : 'active',  // class for items when active
                multi_expand: false,    // whether mutliple items can expand
                speed : 400,        // speed of animation
                toggleable: true      // setting to false only closes accordion panels when another is opened
            };

        $.extend(options, Foundation.utils.data_options($accordion));

        $items.each(function(i) {
            $(this).find('a:eq(0)').on('click.accordion', function() {
                if(!options.toggleable && $items.eq(0).hasClass(options.active_class)) {
                    return;
                }

                $targets.eq(i)
                    .stop(true, true)
                    .slideToggle(options.speed);

                if(!options.multi_expand) {
                    $targets.not(':eq('+i+')')
                    .stop(true, true)
                    .slideUp(options.speed);
                }
            });
        });
    };
}(jQuery));