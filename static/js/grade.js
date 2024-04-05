(() => {
    const dataContainer = document.querySelector('.grid-container');
    const numPeriods = 9;

    const subjectDialog = document.querySelector('.subject-dialog');
    const subjectForm = document.querySelector('#subject-selection-form');
    const closeDialogButton = document.querySelector('.close-dialog-button');
    
    const optButton = document.querySelector('.all-opt-button');
    const extenButton = document.querySelector('.all-exten-button');
    const pdsButton = document.querySelector('.all-pds-button');
    
    for (let i = 0; i < numPeriods; i++) {
        const wrapper = document.createElement('div');
        const periodSubjContainer = document.createElement('div');
        const periodContainer = document.createElement('div');
        const title = document.createElement('p');

        wrapper.classList.add('period-wrapper', 'on-background-text');
        periodSubjContainer.classList.add('on-grid-period-container', 'secondary-container', 'on-secondary-container-text');
        periodSubjContainer.id = `period-${i + 1}`;

        title.classList.add('title', 'body-large');
        title.textContent = `Período ${i + 1}`;
        periodContainer.appendChild(title);

        wrapper.appendChild(periodContainer);
        wrapper.appendChild(periodSubjContainer);
        dataContainer.appendChild(wrapper);
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
            });
        })
        .catch(error => console.error(error));

    closeDialogButton.addEventListener('click', async () => {
        await subjectDialog.close();
    })

    optButton.addEventListener('click', async () => {
        await subjectDialog.show();
    })


})()