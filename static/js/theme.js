(() => {
    const btn = document.querySelector('.theme-toggle')
    const icon = btn.querySelector('.theme-icon')
    const theme = localStorage.getItem('theme')

    if (theme) {
        document.documentElement.setAttribute('data-theme', theme)
        icon.innerHTML = theme === 'dark' ? 'dark_mode' : 'light_mode'
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        icon.innerHTML = 'light_mode'
    }

    btn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme')
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'
        const iconName = newTheme === 'dark' ? 'dark_mode' : 'light_mode'

        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem('theme', newTheme)
        icon.innerHTML = iconName
    })
})()
