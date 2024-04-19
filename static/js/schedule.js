(() => {
    const schedule = {
        monday: [
            window.periodSubjects[2],
            window.periodSubjects[0]
        ],
        tuesday: [
            window.periodSubjects[1],
            window.periodSubjects[3]
        ],
        wednesday: [
            window.periodSubjects[0],
            window.periodSubjects[2]
        ],
        thursday: [
            window.periodSubjects[1],
            window.periodSubjects[4]
        ],
        friday: [
            window.periodSubjects[0]
        ]
    }

    const daysOfWeek = {
        0: 'sunday',
        1: 'monday',
        2: 'tuesday',
        3: 'wednesday',
        4: 'thursday',
        5: 'friday',
        6: 'saturday'
    }

    const getSubjects = (day) => {
        let subjects = []
        for (let i = 0; i < schedule[day].length; i++) {
            subjects.push(schedule[day][i].getHTML())
        }
        return subjects
    }

    const scheduleWrapper = document.querySelector('.today-schedule')

    const d = new Date()
    let day = d.getDay()

    let html

    if (day > 0 && day < 6) {
        html = getSubjects(daysOfWeek[day])
    } else {
        html = [`<div class="subject__name on-secondary-container-text body-large">Sem Aula</div>`]
    }

    for (let i = 0; i < html.length; i++) {
        let subject = document.createElement('div')

        subject.classList.add('subject')
        subject.classList.add('secondary-container')
        subject.innerHTML = html[i]

        scheduleWrapper.insertBefore(subject, scheduleWrapper.lastChild)
    }
})()
