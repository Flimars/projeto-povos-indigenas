
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const textSection = this.closest('section').querySelector('.idioma_texto');
        const toggleIcon = this.querySelector('.toggle-icon');
        if (textSection.classList.contains('hidden')) {
            textSection.classList.remove('hidden');
            toggleIcon.src = '../icon/SetaBaixo.svg';
            toggleIcon.alt = 'Seta para baixo';
        } else {
            textSection.classList.add('hidden');
            toggleIcon.src = '../icon/SetaLado.svg';
            toggleIcon.alt = 'Seta para o lado';
        }
    });
});
