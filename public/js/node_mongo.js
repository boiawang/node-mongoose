jQuery(function($) {
    'use strict';

    $('.delete-user-btn').on('click', function(event) {
        var parent = $(event.currentTarget).parent()
        var name = parent.find('.name').text();

        $.ajax({
            url: 'delete',
            type: 'POST',
            data: {
                userName: name
            }
        }).done(function(msg) {
            alert(msg);
            parent.remove();
        });
    });
});