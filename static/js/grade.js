(() => {
    const dataContainer = document.querySelector('.curriculum-container');

    fetch('static/CompUF.csv')
        .then(response => response.text())
        .then(data => {

            const rows = data.split('\n');
            const headers = rows[0].split(',');
            const content = rows.slice(1).map(row => {
                const values = row.split(',');
                const obj = {};
                headers.forEach((header, index) => {
                    obj[header] = values[index];
                });
                return obj;
            });
            console.log(content)

            content.forEach((el) => {
                console.log(el)
                const card = document.createElement('div');
                card.classList.add('secondary-container', 'on-secondary-container-text');

                const title = document.createElement('p');
                title.classList.add('title', 'headline-small');
                title.textContent = el.grade;
                card.appendChild(title);

                const text = document.createElement('p');
                text.classList.add('text', 'body-medium');
                text.textContent = el.optativas;
                card.appendChild(text);

                dataContainer.appendChild(card);
            })
        })
        .catch(error => console.error(error));
})()