document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('hiddenText');

    button.addEventListener('click', () => {
        if (text.style.display === 'none') {
            text.style.display = 'block';
            button.textContent = 'Esconder Texto';
        } else {
            text.style.display = 'none';
            button.textContent = 'Mostrar Texto';
        }
    });
});
