(() => {
    const dataContainer = document.querySelector('.grid-container');
    const numPeriods = 9;

    const subjectDialog = document.querySelector('.subject-dialog');
    const subjectForm = document.querySelector('#subject-selection-form');

    window.subjects = [];
    window.editPeriodButtons = [];
    window.addSubjectButtons = [];
    window.subjectRadioButtons = [];
    
    for (let i = 0; i < numPeriods; i++) {
        const wrapper = document.createElement('div');
        const periodSubjContainer = document.createElement('div');
        const periodTitleContainer = document.createElement('div');

        const addSubjectButtonContainer = document.createElement('div');
        const addSubjectButton = document.createElement('md-filled-icon-button');
        const addSubjectIcon = document.createElement('span');

        const periodTitleContainerText = document.createElement('p');
        const periodContainerEditButton = document.createElement('md-outlined-icon-button');
        const editIcon = document.createElement('span');

        addSubjectIcon.classList.add('material-symbols-rounded');
        addSubjectIcon.textContent = 'add';

        addSubjectButton.appendChild(addSubjectIcon);
        addSubjectButton.classList.add('add-subject-button', 'on-secondary-container-text', 'body-large');

        addSubjectButtonContainer.appendChild(addSubjectButton);
        addSubjectButtonContainer.classList.add('add-subject-button-container', 'on-background-text', 'body-large');

        periodSubjContainer.appendChild(addSubjectButtonContainer);

        wrapper.classList.add('period-wrapper', 'on-background-text');
        periodSubjContainer.classList.add('on-grid-period-container', 'secondary-container', 'on-secondary-container-text');
        periodSubjContainer.id = `period-${i + 1}`;

        periodTitleContainerText.classList.add('title', 'body-large');
        periodTitleContainerText.textContent = `${i + 1}º Período`;

        editIcon.classList.add('material-symbols-rounded');
        editIcon.textContent = 'edit';

        periodContainerEditButton.appendChild(editIcon);
        periodContainerEditButton.classList.add('edit-button');

        periodTitleContainer.classList.add('period-title-container');

        periodTitleContainer.appendChild(periodTitleContainerText);
        periodTitleContainer.appendChild(periodContainerEditButton);


        wrapper.appendChild(periodTitleContainer);
        wrapper.appendChild(periodSubjContainer);
        dataContainer.appendChild(wrapper);

        window.addSubjectButtons.push(addSubjectButton);
        window.editPeriodButtons.push(periodContainerEditButton);
    }

    

    fetch('static/ementas.csv')
        .then(response => response.text())
        .then(data => {

            const rows = data.split('\n');
            const headers = rows[0].split(';');
            const content = rows.slice(1).map(row => {
                const values = row.split(';');
                const obj = {};
                headers.forEach((header, index) => {
                    obj[header] = values[index];
                });
                return obj;
            });
            window.subjects = content;
            console.log(content)

            content.forEach((el) => {
                const label = document.createElement('label');
                const radioButton = document.createElement('md-radio');
                const span = document.createElement('span');

                radioButton.setAttribute("name", "subject");
                radioButton.setAttribute("value", el["Nome"]);
                radioButton.setAttribute("aria-label", el["Nome"]);
                radioButton.setAttribute("touch-target", "wrapper");

                span.setAttribute("aria-hidden", "true");
                span.textContent = el["Nome"];

                label.appendChild(radioButton);
                label.appendChild(span);

                subjectForm.appendChild(label);
                window.subjectRadioButtons.push(radioButton);
            });
        })
        .catch(error => console.error(error));

})()