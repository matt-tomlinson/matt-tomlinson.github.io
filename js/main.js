function initializePage() {
  initializeHeaderLinks();
  initializeFooter();
}

function initializeHeaderLinks() {
    var headerLinks = document.getElementById("header-links").children;
    let firstPageId = headerLinks[0].id;

    fetch(`/pages/${firstPageId}.html`)
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("main-content").innerHTML = data;
            document.getElementById("page-header").innerHTML = `> ${firstPageId}`;
        });

    for (let i = 0; i < headerLinks.length; i++) {
        if (headerLinks[i]) {
            headerLinks[i].addEventListener("click", function (event) {
                event.preventDefault();
                fetch(`/pages/${headerLinks[i].id}.html`)
                    .then((response) => response.text())
                    .then((data) => {
                        document.getElementById("main-content").innerHTML = data;
                        document.getElementById(
                            "page-header"
                        ).innerHTML = `> ${headerLinks[i].id}`;
                    });
            });
        }
    }
}

function initializeFooter() {
    document.querySelector(
        "footer p"
    ).textContent = `© ${new Date().getFullYear()} Matt Tomlinson`;
}

window.onload = initializePage;
