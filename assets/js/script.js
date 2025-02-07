function showContent(id) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('d-none'); // Usa Bootstrap para ocultar
        section.classList.remove('show'); // Remove classe de animação, se aplicável
    });

    // Exibe o conteúdo selecionado com animação
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.remove('d-none'); // Torna visível imediatamente
        setTimeout(() => {
            selectedSection.classList.add('show'); // Adiciona a classe de animação
        }, 10); // Delay curto para garantir que a transição funcione
    }
}

