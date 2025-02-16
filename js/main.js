function initializePage() {
    initializeHeaderLinks();
    initializeFooter();
}

function initializeHeaderLinks() {
    var headerLinks = document.getElementById("header-links").children;
    loadPageDataById(headerLinks[0].id);

    for (let i = 0; i < headerLinks.length; i++) {
        if (headerLinks[i]) {
            headerLinks[i].addEventListener("click", function (event) {
                event.preventDefault();
                loadPageDataById(headerLinks[i].id);
            });
        }
    }
}

function loadPageDataById(pageId) {
    fetch(`/pages/${pageId}.html`).then((response) => response.text()).then((data) => {
        document.getElementById("main-content").innerHTML = data;
        document.getElementById("page-header").innerHTML = `> ${pageId}`;
    });
}

function initializeFooter() {
    document.querySelector(
        "footer p"
    ).textContent = `© ${new Date().getFullYear()} Matt Tomlinson`;
}

window.onload = initializePage;
