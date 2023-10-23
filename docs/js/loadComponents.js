document.addEventListener("DOMContentLoaded", function () {
    fetchComponent("components/nav.html", document.getElementById("navigation-placeholder"));
    fetchComponent("components/header.html", document.getElementById("header-placeholder"), function () {
        fetchComponent("components/header_text.html", document.getElementById("header-text-placeholder"));
        fetchComponent("components/aboutme.html", document.getElementById("aboutme-placeholder"));
        fetchComponent("components/orbit_container.html", document.getElementById("div_container-placeholder"));
        fetchComponent("components/projects.html", document.getElementById("projects-placeholder"));
        fetchComponent("components/footer.html", document.getElementById("footer-placeholder"));
    });

    function fetchComponent(url, element, callback) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
                if (callback) callback(); // execute the callback if it exists
            });
    }
});

document.dispatchEvent(new Event("componentsLoaded"));
