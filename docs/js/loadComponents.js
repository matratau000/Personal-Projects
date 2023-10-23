document.addEventListener("DOMContentLoaded", function() {
    fetchComponent("components/nav.html", document.getElementById("navigation-placeholder"));
    fetchComponent("components/header.html", document.getElementById("header-placeholder"));
    fetchComponent("components/aboutme.html", document.getElementById("aboutme-placeholder"));
    fetchComponent("components/orbit_container.html", document.getElementById("div_container-placeholder"));
    fetchComponent("components/projects.html", document.getElementById("projects-placeholder"));
    fetchComponent("components/footer.html", document.getElementById("footer-placeholder"));
});

function fetchComponent(url, element) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            element.innerHTML = data;
        });
}
