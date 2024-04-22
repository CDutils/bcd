(() => {

    const downloadButton = document.querySelector('.download-grid-button');
    const uploadButton = document.querySelector('.upload-grid-button');

    downloadButton.addEventListener('click', downloadGrid);

    uploadButton.addEventListener('click', loadGridFromFile);
})()