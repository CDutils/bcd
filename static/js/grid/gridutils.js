const storeGrid = () => {
    localStorage.setItem('userGrid', JSON.stringify(window.userGrid));
}

const loadGrid = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.click();
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = e => {
            window.userGrid = JSON.parse(e.target.result);
            storeGrid();
        };
        reader.readAsText(file);
    };
}

const downloadGrid = () => {
    const json = JSON.stringify(window.userGrid); // Get global grid data
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();

    URL.revokeObjectURL(url);
}

const addGridToWindow = () => {
    window.userGrid = JSON.parse(localStorage.getItem('userGrid'));
}

const addSubjectFromDialog = (selectedSubject, selectedPeriod) => {
    const label = document.querySelector(`#subject-selection-form label:has(md-radio[value="${selectedSubject["Nome"]}"])`);
    label.style.display = 'none';

    const periodContainer = document.querySelector(`#period-${selectedPeriod + 1}`);

    const subjectContainer = document.createElement('div');
    const removeSubjectButton = document.createElement('span');

    subjectContainer.classList.add('on-grid-subject-container', 'primary-container', 'on-primary-container-text', 'body-large');
    subjectContainer.setAttribute('id', selectedSubject["Id"]);
    subjectContainer.textContent = selectedSubject["Nome"];

    removeSubjectButton.classList.add('material-symbols-rounded', 'delete-subject-icon');
    removeSubjectButton.style.display = 'none';
    removeSubjectButton.textContent = 'delete';

    if (!window.userGrid[selectedPeriod]) {
        window.userGrid[selectedPeriod] = [];
    }

    const index = window.userGrid[selectedPeriod].findIndex((s) => s["Id"] === selectedSubject["Id"]);
    selectedSubject["Período"] = selectedPeriod + 1;

    if (index === -1) {
        window.userGrid[selectedPeriod].push(selectedSubject);
    } else {
        window.userGrid[selectedPeriod][index] = selectedSubject;
    }

    removeSubjectButton.addEventListener('click', () => {
        const parent = removeSubjectButton.parentElement;
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
    })

    subjectContainer.appendChild(removeSubjectButton);
    periodContainer.appendChild(subjectContainer);

    storeGrid();
}