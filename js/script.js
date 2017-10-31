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
});