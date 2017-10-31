/**
 * Created by tranv on 30/10/2017.
 */

$(document).ready(function() {
    $('.carousel').carousel()

    var countdownClock = $('#clock');

    var countdownTime = countdownClock.data('countdown-time');
    countdownClock.countdown(countdownTime, function(event) {
        $(this).html(event.strftime('<span class="day">%D</span> : <span class="hour">%H</span> : <span class="minute">%M</span> : <span class="second">%S</span>'));
    });

    $('#register-form').on('submit', function(event) {
        event.preventDefault();
        var email = $('#register-email').val();

        $.ajax({
            type: "POST",
            url: 'http://59e57ad3f99ad90012268277.mockapi.io/event',
            data: {
                email: email
            },
            success: function (response) {
                console.log(response);
                $('#register-email').val('');
                alert('Register successfully');
            }
        });
    });
});