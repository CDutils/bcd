/**
 * Stores the user grid data in the local storage.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
const storeGrid = () => {
    localStorage.setItem('userGrid', JSON.stringify(window.userGrid));
}

/**
 * Retrieves the user grid data from local storage and assigns it to the global window.userGrid variable.
 *
 * @return {void} This function does not return a value.
 */
const getGridFromStorage = () => {
    window.userGrid = JSON.parse(localStorage.getItem('userGrid'));
}


/**
 * Reads the grid data from a file input event, stores it, and adds subjects to the grid.
 *
 * @param {Event} e - The event object containing the file data.
 * @return {void} This function does not return a value.
 */
const readGridFromFile = (e) => {
    window.userGrid = JSON.parse(e.target.result);
    storeGrid();

    if (window.userGrid) {
        for (let period = 0; period < window.userGrid.length; period++) {
            const subjects = window.userGrid[period];
            if (subjects) {
                for (let i = 0; i < subjects.length; i++) {
                    const subject = subjects[i];
                    addSubjectToGrid(subject, period);
                }
            }
        }
    }
}

/**
 * Loads the grid data from storage and adds subjects to the grid.
 *
 * @return {void} This function does not return a value.
 */
const loadGridFromStorage = () => {
    getGridFromStorage();
    if (window.userGrid) {
        for (let period = 0; period < window.userGrid.length; period++) {
            const subjects = window.userGrid[period];
            if (subjects) {
                for (let i = 0; i < subjects.length; i++) {
                    const subject = subjects[i];
                    addSubjectToGrid(subject, period);
                }
            }
        }
    }
}

/**
 * Loads a grid from a JSON file selected by the user.
 *
 * @return {void} This function does not return a value.
 */
const loadGridFromFile = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.click();
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = e => readGridFromFile(e);
        reader.readAsText(file);
    };


}

/**
 * Downloads the user grid data as a JSON file.
 *
 * @return {undefined} This function does not return a value.
 */
const downloadGrid = () => {
    const json = JSON.stringify(window.userGrid); // Get global grid data
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const date = new Date();
    const filename =
        'minha_grade-' +
        ('0' + date.getDate()).slice(-2) +
        '_' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '_' +
        date.getFullYear() +
        '-' +
        ('0' + date.getHours()).slice(-2) +
        '_' +
        ('0' + date.getMinutes()).slice(-2) +
        '.json';

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
}

/**
 * Removes a subject from the grid based on the button and label elements.
 *
 * @param {Object} button - The button element associated with the subject.
 * @param {Object} label - The label element associated with the subject.
 * @return {void} This function does not return a value.
 */
const removeSubjectFromGrid = (button, label) => {
    const parent = button.parentElement;
    const period = parent.parentElement.parentElement.firstElementChild.textContent.charAt(0) - 1;
    const id = parent.getAttribute('id');
    parent.remove();

    document.querySelector(`#subject-selection-form label:has(md-radio[value="${parent["Nome"]}"])`)
    label.style.display = 'block';

    window.userGrid[period].forEach(element => {
        if (element["Id"] == id) {
            const index = window.userGrid[period].indexOf(element);
            window.userGrid[period].splice(index, 1);
        }
    });

    storeGrid();
}

/**
 * Hides the selected subject in the subject selection form.
 *
 * @param {Object} subject - The subject object.
 * @return {Object} subject label - The subject label element.
 */
const hideSelectedSubject = (subject) => {
    const subjectLabel = document.querySelector(`#subject-selection-form label:has(md-radio[value="${subject["Nome"]}"])`)
    subjectLabel.style.display = 'none';

    return subjectLabel;
}

/**
 * Hides all delete subject icons on the page.
 *
 * @return {void} This function does not return anything.
 */
const hideDeleteButtons = () => {
    document.querySelectorAll('.delete-subject-icon').forEach((button) => { button.style.display = 'none' });
}

/**
 * Closes the dialog and performs additional actions if a subject and period are selected.
 *
 * @param {Object} selectedSubject - The selected subject object.
 * @param {number} selectedPeriod - The selected period number.
 * @param {Object} dialog - The dialog object to be closed.
 * @return {Promise} A promise that resolves when the dialog is closed.
 */
const closeDialog = async (selectedSubject, selectedPeriod, dialog) => {
    hideDeleteButtons();

    if (selectedSubject && (selectedPeriod + 1)) {
        addSubjectToGrid(selectedSubject, selectedPeriod);
    }
    selectedPeriod = null;
    selectedSubject = null;
    await dialog.close();
}

/**
 * Adds a subject from a dialog to the grid.
 *
 * @param {Object} subject - The subject object.
 * @param {number} period - The period number.
 */
const addSubjectToGrid = (subject, period) => {
    const labelInGrid = hideSelectedSubject(subject);

    const periodContainer = document.querySelector(`#period-${period + 1}`);

    const subjectContainer = document.createElement('div');
    const removeSubjectButton = document.createElement('span');

    subjectContainer.classList.add('on-grid-subject-container', 'primary-container', 'on-primary-container-text', 'body-large');
    subjectContainer.setAttribute('id', subject["Id"]);
    subjectContainer.textContent = subject["Nome"];

    removeSubjectButton.classList.add('material-symbols-rounded', 'delete-subject-icon');
    removeSubjectButton.style.display = 'none';
    removeSubjectButton.textContent = 'delete';

    if (!window.userGrid[period]) {
        window.userGrid[period] = [];
    }

    const index = window.userGrid[period].findIndex((s) => s["Id"] === subject["Id"]);
    subject["Período"] = period + 1;

    if (index === -1) {
        window.userGrid[period].push(subject);
    } else {
        window.userGrid[period][index] = subject;
    }

    removeSubjectButton.addEventListener('click', () => removeSubjectFromGrid(removeSubjectButton, labelInGrid));

    subjectContainer.appendChild(removeSubjectButton);
    periodContainer.appendChild(subjectContainer);

    storeGrid();
}