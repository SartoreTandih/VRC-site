// Exemplo: Mudar fundo do header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#ffffff';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.padding = '1rem 5%';
    }
});

// A rolagem suave já é tratada pelo CSS (scroll-behavior: smooth)
// mas você pode adicionar lógica de fechamento de menu mobile aqui futuramente.