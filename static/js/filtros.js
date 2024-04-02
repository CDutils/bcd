(() => {

    const sliderFilter = document.querySelector('.filter-slider');
    const downloadButton = document.querySelector('.download-grid-button');

    sliderFilter.addEventListener('input', (event) => {
        console.log(value)
    });

    downloadButton.addEventListener('click', () => {

        const json = JSON.stringify(window.myGrid); // Get global grid data
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'data.json';
        a.click();

        URL.revokeObjectURL(url);
    });
})()