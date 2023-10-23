document.addEventListener('DOMContentLoaded', function () {

    // Handle card toggling
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(function (radio) {
        radio.addEventListener('click', function (e) {
            if (radio._wasChecked) {
                radio.checked = false;
            }
            radio._wasChecked = radio.checked;
        });
    });

});

// Handle clicks outside the card on mobile views
document.addEventListener('click', function (event) {
    if (window.innerWidth <= 800) {
        // If the click was on a card, exit early
        if (event.target.closest('.card')) {
            return;
        }

        // If the click was outside, uncheck all radio buttons
        document.querySelectorAll('input[type="radio"]').forEach(radio => {
            radio.checked = false;
            radio._wasChecked = false;  // Reset the _wasChecked property as well
        });
    }
});
