(() => {

    const schedule = {
        monday: [
            window.subjects[2],
            window.subjects[0],
        ],
        tuesday: [
            window.subjects[1],
            window.subjects[3]
        ],
        wednesday: [
            window.subjects[0],
            window.subjects[2]
        ],
        thursday: [
            window.subjects[1],
            window.subjects[4]
        ],
        friday: [
            window.subjects[0]
        ]
    };

    const days_of_week = {
        0: 'sunday',
        1: 'monday',
        2: 'tuesday',
        3: 'wednesday',
        4: 'thursday',
        5: 'friday',
        6: 'saturday'
    };

    const get_subjects = (day) => {
        let subjects = [];
        for (let i = 0; i < schedule[day].length; i++) {
            subjects.push(schedule[day][i].getHTML());
        }
        return subjects;
    }

    const schedule_wrapper = document.querySelector('.today-schedule');

    const d = new Date();
    let day = d.getDay();

    let html;

    if (0 < day && day < 6) {
        html = get_subjects(days_of_week[day]);
    } else {
        html = [`<div class="subject__name on-secondary-container-text body-large">Sem Aula</div>`];
    }

    for (let i = 0; i < html.length; i++) {
        let subject = document.createElement('div');

        subject.classList.add('subject');
        subject.classList.add('secondary-container');
        subject.innerHTML = html[i];

        schedule_wrapper.insertBefore(subject, schedule_wrapper.lastChild);
    }

})()
