
document.addEventListener('DOMContentLoaded', function() {
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function(radio) {
        radio.addEventListener('click', function(e) {
            if (radio._justClicked) {
                radio.checked = false;
            }
            radio._justClicked = radio.checked;
        });
    });
});
