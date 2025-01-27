document.getElementById('toggle-button').addEventListener('click', function() {
    const textSection = document.getElementById('text-section');
    const toggleIcon = document.getElementById('toggle-icon');
    
    if (textSection.style.display === 'none' || textSection.style.display === '') {
        textSection.style.display = 'block'; 
        toggleIcon.src = '../icon/SetaBaixo.svg'; 
        toggleIcon.alt = 'Seta para baixo';
        
    } else {
        textSection.style.display = 'none';
        toggleIcon.src = '../icon/SetaLado.svg'; 
        toggleIcon.alt = 'seta para o lado '; 
    }
});

