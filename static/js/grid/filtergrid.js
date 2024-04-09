(() => {

    const subjectDialog = document.querySelector('.subject-dialog');
    const subjectTitleDialog = document.querySelector('.dialog-description .title');
    const subjectEmentaDialog = document.querySelector('.dialog-description .ementa');
    const closeDialogButton = document.querySelector('.close-dialog-button');

    var selectedSubject = null;
    var selectedPeriod = null;

    const allOptButton = document.querySelector('.all-opt-button');
    const allExtenButton = document.querySelector('.all-exten-button');

    const sliderFilter = document.querySelector('.filter-slider');

    setTimeout(() => {
        closeDialogButton.addEventListener('click', async () => {
            document.querySelectorAll('.delete-subject-icon').forEach((button) => { button.style.display = 'none' });

            if (selectedSubject && (selectedPeriod + 1)) {
                const periodContainer = document.querySelector(`#period-${selectedPeriod + 1}`);

                const subjectContainer = document.createElement('div');
                const removeSubjectButton = document.createElement('span');

                subjectContainer.classList.add('on-grid-subject-container', 'primary-container', 'on-primary-container-text', 'body-large');
                subjectContainer.textContent = selectedSubject;

                removeSubjectButton.classList.add('material-symbols-rounded', 'delete-subject-icon');
                removeSubjectButton.style.display = 'none';
                removeSubjectButton.textContent = 'delete';

                removeSubjectButton.addEventListener('click', () => {
                    removeSubjectButton.parentElement.remove();
                })

                subjectContainer.appendChild(removeSubjectButton);
                periodContainer.appendChild(subjectContainer);
            }
            selectedPeriod = null;
            selectedSubject = null;
            await subjectDialog.close();
        })

        window.editPeriodButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const deleteButtons = document.querySelector(`#period-${index + 1}`).querySelectorAll('.delete-subject-icon');
                deleteButtons.forEach((button) => {
                    button.style.display = button.style.display == 'none' ? 'block' : 'none';
                })
            })
        })

        window.addSubjectButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                selectedPeriod = index;
                subjectDialog.show();
            })
        })

        window.subjectRadioButtons.forEach((radio) => {
            radio.addEventListener('click', () => {
                selectedSubject = radio.getAttribute('value');

                subjectTitleDialog.textContent = selectedSubject;
                subjectEmentaDialog.innerHTML = '';

                const ementa = window.subjects.filter((el) => el['Nome'] === selectedSubject)[0]['Ementa'];

                ementa.replaceAll("\"").split(".").forEach((e) => {
                    e = e.replaceAll("undefined", "")
                    const el = e.trim();
                    if (el === '' || el == 'undefined') return
                    const li = document.createElement('li');
                    li.textContent = el;
                    subjectEmentaDialog.appendChild(li);
                })
            })
        })
    }, 5000)

    sliderFilter.addEventListener('input', (event) => {
        console.log(value)
    });
})()