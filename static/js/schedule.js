(() => {
    class Subject {
        /**
         * Creates a new instance of the Subject class with the given parameters.
         *
         * @param {string} id - The id of the object.
         * @param {string} name - The name of the object.
         * @param {string} place - The place where the object occurs.
         * @param {string} time - The time of the object.
         */
        constructor(id, name, place, time) {
            this.id = id;
            this.name = name;

            this.place = place;

            this.time = time;
        }
        getHTML() {
            return `
                <div class="subject__name on-secondary-container-text headline-small"><span>${this.name}</span></div>
                <div class="subject__id on-secondary-container-text body-medium">Turma ${this.id}</div>
                <div class="subject__time on-secondary-container-text body-large">${this.time}</div>
                <div class="subject__place on-secondary-container-text body-large">${this.place}</div>
            `;
        }
    }

    window.subjects = [
        new Subject('TM01', 'Cálculo Diferencial e Integral 1', 'CAD 3 - Sala 312', '13:00 - 14:40'),
        new Subject('TC', 'Fundamentos de Ciência de Dados (FCD)', 'DCC - Sala 2014', '14:55 - 16:35'),
        new Subject('TTW', 'Introdução à Lógica Computacional (ILC)', 'DCC - Sala 2015', '14:55 - 16:35'),
        new Subject('TM1', 'Programação e Desenvolvimento de Software 1 (PDS1)', 'CAD 3 - Laico B 307', '13:00 - 14:40'),
        new Subject('TM1', 'Programação e Desenvolvimento de Software 1 (PDS1)', 'DCC - Sala 2008', '13:00 - 14:40')
    ];

    const schedule = {
        'monday': [
            window.subjects[2],
            window.subjects[0],
        ],
        'tuesday': [
            window.subjects[1],
            window.subjects[3]
        ],
        'wednesday': [
            window.subjects[0],
            window.subjects[2]
        ],
        'thursday': [
            window.subjects[1],
            window.subjects[4]
        ],
        'friday': [
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
        html = [`<div class="subject__name">Sem Aula</div>`];
    }

    for (let i = 0; i < html.length; i++) {
        let subject = document.createElement('div');

        subject.classList.add('subject');
        subject.classList.add('secondary-container');
        subject.innerHTML = html[i];

        schedule_wrapper.insertBefore(subject, schedule_wrapper.lastChild);
    }

})()
