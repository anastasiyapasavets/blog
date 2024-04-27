document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // предотвращаем стандартное поведение ссылки (переход по адресу)

            const href = this.getAttribute('href'); // получаем значение атрибута href ссылки

            // перенаправляем пользователя на страницу, указанную в атрибуте href
            window.location.href = href;
        });
    });
});
