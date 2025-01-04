function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.style.display = 'block';
            tab.classList.add('active');
        } else {
            tab.style.display = 'none';
            tab.classList.remove('active');
        }
    });

    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === tabName) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}