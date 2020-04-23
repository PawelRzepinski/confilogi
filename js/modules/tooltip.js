import $ from 'jquery'
function initTooltip() {
    $('[data-toggle="tooltip"]').tooltip()
}

$(window).on('load', function(){
    initTooltip();
});