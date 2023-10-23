
$(document).ready(function() {
    function handleFormSteps() {
        $('.form-step').each(function() {
            if ($(this).hasClass('active')) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }
    handleFormSteps();
    $('nav a').click(function(e) {
        e.preventDefault();
        let href = $(this).attr('href');
        let offset = $(href).offset().top - $('header').outerHeight(true);
        $('html, body').animate({
            scrollTop: offset
        }, 1000);
    });
    $('#step-1').addClass('active');
    $('.btn-next').click(function() {
        let currentStep = $(this).closest('.form-step');
        let nextStepNum = $(this).data('next');
        if(currentStep.is('#step-2')) {
            nextStepNum = 3;
        }
        currentStep.removeClass('active');
        $('#step-' + nextStepNum).addClass('active');
        handleFormSteps();
    });
});
