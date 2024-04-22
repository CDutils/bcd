(() => {

    const subjectDialog = document.querySelector('.subject-dialog');
    const subjectForm = document.querySelector('#subject-selection-form');
    const subjectTitleDialog = document.querySelector('.dialog-description .title');
    const subjectEmentaDialog = document.querySelector('.dialog-description .ementa');
    const closeDialogButton = document.querySelector('.close-dialog-button');

    var selectedSubject = null;
    var selectedPeriod = null;

    const allOptButton = document.querySelector('.all-opt-button');
    const allExtenButton = document.querySelector('.all-exten-button');

    setTimeout(() => {
        closeDialogButton.addEventListener('click', async () => await closeDialog(selectedSubject, selectedPeriod, subjectDialog));

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
                selectedSubject = window.subjects.filter((el) => el['Nome'] === radio.getAttribute('value'))[0];

                subjectTitleDialog.textContent = selectedSubject["Nome"];
                subjectEmentaDialog.innerHTML = '';

                const ementa = selectedSubject['Ementa'];

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

})()