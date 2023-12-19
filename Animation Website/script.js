function toggleMenu() {
    console.log("Clicked");

    const nav = document.querySelector('.menu');

    if (window.getComputedStyle(nav).display === "none") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}
