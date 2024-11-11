function toggleMode() {
    const body = document.body;
    const toggleText = document.querySelector('.mode-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleText.textContent = 'Switch to Light Mode';
    } else {
        toggleText.textContent = 'Switch to Dark Mode';
    }
}

// Optional: Save user preference in localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.mode-toggle').textContent = 'Switch to Light Mode';
    }

    const toggleButton = document.querySelector('.mode-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleMode);  // Add event listener
    }
});

function toggleMoreContent() {
    const hiddenContent = document.getElementById('hiddenContent');
    hiddenContent.style.display = hiddenContent.style.display === 'none' || hiddenContent.style.display === '' ? 'block' : 'none';
}