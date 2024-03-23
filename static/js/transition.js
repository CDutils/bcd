(() => {
    var loader = document.querySelector('.loader')
    var btns = document.querySelectorAll('.nav-links>li>a')

    window.onload = () => {
        loader.classList.remove('loader--active')
    }

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            loader.classList.add('loader--active')

            window.setTimeout(() => {
                loader.classList.remove('loader--active')
            }, 2500)
        })
    })
})()
