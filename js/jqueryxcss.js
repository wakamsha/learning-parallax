$(function() {
    var $window = $(window);

    $('.content').each(function(index) {
        var $self = $(this);
        var offsetCoords = $self.offset();

        $(window).scroll(function() {
            // If this section is in view
            if (($window.scrollTop() + $window.height()) > offsetCoords.top && ((offsetCoords.top + $self.height()) > $window.scrollTop())) {
                var yPos = -($window.scrollTop() / 8);
                if ($self.attr('id') != 'first') {
                    yPos += 126;
                }
                var coords = '50%' + yPos + 'px';
                $self.css('backgroundPosition', coords);

                // Check for other sprites in this section
                $('.sprite', $self).each(function(index) {
                    var $sprite = $(this);
                    var yPos = -($window.scrollTop() / $sprite.data('speed')) + $sprite.data('offsety');
                    $sprite.css('top', yPos);
                });
            }
        });
    });
});