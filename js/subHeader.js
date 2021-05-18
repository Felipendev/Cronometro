const icon = document.getElementById("icon");

function toggleMenu() {
    const subHeader = document.getElementById("sub-header");
    subHeader.classList.toggle('active');
}
icon.addEventListener('click', toggleMenu);