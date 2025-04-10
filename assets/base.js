// Simple JavaScript to make the navigation links smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links that point to sections
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const dialog = document.getElementById('dialog'); //boks som skal åbnes med info
    const delivery = document.getElementById('delivery'); //hele kolonnen som skal være "trykbar"
    const closeDialogBtn = document.getElementById('close-dialog');// knappen som lukker dialogen

    // Åbn dialog når delivery kolonnen klikkes
    delivery.addEventListener('click', function() {
        dialog.showModal();
    });

    // Luk dialog når der klikkes på "Luk" knappen
    closeDialogBtn.addEventListener('click', function() {
        dialog.close();
    });


    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Scroll smoothly to the target
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to the current navigation item
    function highlightCurrentSection() {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('nav ul li a');

        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    }

    // Call the function on scroll
    window.addEventListener('scroll', highlightCurrentSection);
});
