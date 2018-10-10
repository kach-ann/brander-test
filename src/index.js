import "./main.scss";
import $ from "jquery";
import 'rangeslider.js';
import 'rangeslider.js/dist/rangeslider.css';

$(() => {

    $('input[name="attributes"]').on('change', function (e) {
        $('.checkbox-text').toggle(!$(this).is(":checked"));
    })

    const rangeEl = $('input[type="range"]');
    rangeEl.rangeslider({
        polyfill: false,
        onInit: function () {
            $('.rangeslider__handle').html(`<div class="currentTerm"><span>< </span>${rangeEl.val()} ${dayMessege(rangeEl.val())}<span> ></span><div>`);
        },
        onSlide: function(position, value) {
            $('.rangeslider__handle').html(`<div class="currentTerm"><span>< </span>${value} ${dayMessege(value)}<span> ></span><div>`);
        }
    });

    function dayMessege(day) {
        if ( day === 1 || day === 21 || day === 31) {
            return "день";
        } else if (day === 2 || day === 3 || day === 4 || day === 22|| day === 23 || day === 24){
            return "дня";
        } else {
            return "дней";
        }
    }



});