(() => {
    const showWarningDialog = () => {
        setTimeout(() => {
            warningDialog.show();
        }, 3000)
    }

    const closeDialogButton = document.querySelector('.close-small-screen-dialog-button');
    const warningDialog = document.querySelector('.small-screen-dialog');
    const gridTab = document.querySelector('.nav-links li a[href="#curriculum-tab"]');

    const observer = new MutationObserver(() => {
        let screenWidth = window.innerWidth;
        if (screenWidth < 500 && gridTab.classList.contains('active-link'))
            showWarningDialog()
    });

    observer.observe(gridTab, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('resize', () => {
        let screenWidth = window.innerWidth;
        if (screenWidth < 500 && gridTab.classList.contains('active-link'))
            showWarningDialog()
    });

    closeDialogButton.addEventListener('click', async () => {
        await warningDialog.close();
    })
})()