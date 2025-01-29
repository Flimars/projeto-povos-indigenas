const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button) => {
    button.addEventListener('click', function() {
        const textSection = this.closest('section').querySelector('.idioma_texto');
        const toggleIcon = this.querySelector('.toggle-icon');

        console.log('Botão clicado:', button);
        console.log('Seção de texto:', textSection);
        console.log('Ícone:', toggleIcon);

        if (textSection.classList.contains('hidden')) {
            textSection.classList.remove('hidden');
            toggleIcon.src = '../icon/SetaBaixo.svg';
            toggleIcon.alt = 'Seta para baixo';
            console.log('Texto mostrado e ícone alterado para baixo');
        } else {
            textSection.classList.add('hidden');
            toggleIcon.src = '../icon/SetaLado.svg';
            toggleIcon.alt = 'Seta para o lado';
            console.log('Texto escondido e ícone alterado para o lado');
        }
    });
});
