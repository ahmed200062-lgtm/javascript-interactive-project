const themeBtn = document.getElementById('themeToggleBtn');

themeBtn.addEventListener('click', () => {
    
    if (document.body.style.backgroundColor === 'rgb(18, 18, 18)') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        themeBtn.textContent = 'DarkMode';
        themeBtn.style.backgroundColor = '#333';
        themeBtn.style.color = '#f6f2f2';
    } else {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#6b6767';
        themeBtn.textContent = 'DayMode';
        themeBtn.style.backgroundColor = '#f1f1f1';
        themeBtn.style.color = '#000';
    }
});