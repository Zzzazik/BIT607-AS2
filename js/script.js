document.getElementById('burger-menu').addEventListener('click', function () {
    var menu = document.getElementById('nav-menu');
    var isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('active'); // Toggle 'active' class to show/hide menu
});