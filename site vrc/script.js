
// Header style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.padding = '1rem 5%';
        header.style.background = ''; // restore
    }
});

// Back to Top button
document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.getElementById('backToTop');
    if (!backBtn) return;

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    };


    toggleVisibility();


    window.addEventListener('scroll', toggleVisibility, { passive: true });


    backBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });

        backBtn.blur();
    });

    backBtn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            backBtn.click();
        }
    });
});
