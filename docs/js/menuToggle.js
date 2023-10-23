document.addEventListener('click', function (event) {
    // Check if the clicked element or its parent is the menuToggle
    if (event.target.matches('.menu-toggle') || event.target.closest('.menu-toggle')) {
        const navList = document.querySelector('.nav-list');
        navList.classList.toggle('active');
    } else if (!event.target.classList.contains('apple-btn')) {
        // If clicked outside the list items, close the menu
        const navList = document.querySelector('.nav-list');
        navList.classList.remove('active');
    }
});
