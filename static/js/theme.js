(() => {
    const btn = document.querySelector('.theme-icon');
    const icon = btn.querySelector('ion-icon');
    const theme = localStorage.getItem('theme');

    if (theme) {
        document.documentElement.setAttribute('data-theme', theme);
        icon.setAttribute('name', theme === 'light' ? 'sunny-outline' : 'moon-outline');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.setAttribute('name', 'sunny-outline');
    }

    


    btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        const iconName = newTheme === 'dark' ? 'moon-outline' : 'sunny-outline';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        icon.setAttribute('name', iconName);
    });



})()