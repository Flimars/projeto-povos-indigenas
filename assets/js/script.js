function showContent(id) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('d-none'); 
        section.classList.remove('show'); 
    });

    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.remove('d-none'); 
        setTimeout(() => {
            selectedSection.classList.add('show'); 
        }, 10); 
    }
}

