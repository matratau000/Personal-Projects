
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 800) {
        let isCard = event.target.closest('.card');
        if (!isCard) {
            let radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => radio.checked = false);
        }
    }
});
