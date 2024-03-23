(() => {
    const cardElements = document.querySelectorAll(".card");
    const cards = [...cardElements];

    const infoContainer = document.querySelector(".subject-info");
    const info = {
        title: infoContainer.querySelector(".subject-title"),
        time: infoContainer.querySelector(".subject-time"),
        teacher: infoContainer.querySelector(".subject-teacher"),
        tests: infoContainer.querySelector(".subject-tests"),
        books: infoContainer.querySelector(".subject-books ul"),
        description: infoContainer.querySelector(".subject-description"),
        links: infoContainer.querySelector(".subject-links")
    };

    function updateInfo(subject) {
        info.title.innerHTML = subject.name;
        const arrowBack = document.createElement("span");
        arrowBack.classList.add("material-symbols-rounded", "arrow-back");
        arrowBack.textContent = "arrow_back";
        info.title.prepend(arrowBack);

        info.time.innerHTML = `<b>Horário</b>: ${subject.time}`;

        info.teacher.innerHTML = `<b>Professor</b>: ${subject.teacher}`;

        info.description.innerHTML = "";
        if (subject.description.length > 1) {
            const descriptionList = document.createElement("ul");
            info.description.appendChild(descriptionList);
            subject.description.forEach(desc => {
                const descriptionContainer = document.createElement("li");
                descriptionContainer.classList.add("subject-description-element");
                descriptionContainer.textContent = desc;
                descriptionList.appendChild(descriptionContainer);
            });
        } else {
            const descriptionContainer = document.createElement("p");
            descriptionContainer.classList.add("subject-description-element");
            descriptionContainer.textContent = subject.description[0];
            info.description.appendChild(descriptionContainer);
        }

        const titleDescSpan = document.createElement("span");
        titleDescSpan.classList.add("title-large", "on-secondary-container-text");
        titleDescSpan.textContent = "Resumo:";
        info.description.prepend(titleDescSpan);

        info.tests.innerHTML = "";
        subject.tests.forEach((test) => {
            const testContainer = document.createElement("div");
            testContainer.classList.add("subject-test-container");

            const testTitle = document.createElement("span");
            testTitle.classList.add("subject-test-title", "title-large", "on-secondary-container-text");
            testTitle.textContent = test.name;
            testContainer.appendChild(testTitle);

            const testBody = document.createElement("ul");
            testBody.classList.add("subject-test-body");

            if (test.num > 1) {
                const testNum = document.createElement("li");
                testNum.classList.add("subject-test-num");
                testNum.innerHTML = `<b>Quantidade</b>: ${test.num}`;
                testBody.appendChild(testNum);
            }

            const testVal = document.createElement("li");
            testVal.classList.add("subject-test-val");
            testVal.innerHTML = `<b>Valor</b>: ${test.valor}`;

            const testDate = document.createElement("li");
            testDate.classList.add("subject-test-desc");
            testDate.innerHTML = `<b>Data</b>: ${test.data}`;

            testBody.appendChild(testVal);
            testBody.appendChild(testDate);
            testContainer.appendChild(testBody);
            info.tests.appendChild(testContainer);

        });

        info.books.innerHTML = "";
        subject.books.forEach(book => {
            const bookContainer = document.createElement("li");
            bookContainer.classList.add("subject-book-container");
            const linkText = document.createElement("a");
            linkText.classList.add("subject-book-link");
            linkText.href = book.link;
            linkText.target = "_blank";
            linkText.textContent = book.name;
            
            bookContainer.appendChild(linkText);
            info.books.appendChild(bookContainer);
        });

        info.links.innerHTML = "";
        subject.links.forEach((link, indx) => {
            const linkContainer = document.createElement("div");
            linkContainer.classList.add("subject-link-container", "on-secondary-container-text");

            const linkIcon = document.createElement("span");
            linkIcon.classList.add("material-symbols-rounded");
            linkIcon.textContent = "arrow_right";

            const linkText = document.createElement("a");
            linkText.href = link;
            linkText.target = "_blank";
            linkText.textContent = indx === 0 && subject.links.length > 1 ? "Site do(a) professor(a)" : "Moodle";

            linkContainer.appendChild(linkIcon);
            linkContainer.appendChild(linkText);

            info.links.appendChild(linkContainer);
        });
        const titleLinkSpan = document.createElement("span");
        titleLinkSpan.classList.add("title-large", "on-secondary-container-text");
        titleLinkSpan.textContent = "Links:";
        info.links.prepend(titleLinkSpan);
    }

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const cardId = card.querySelector(".card .text").innerHTML;
            const subject = window.subjects.filter((el) => el.id === cardId.split(" ")[1])[0];
            console.log(subject);
            updateInfo(subject);

            infoContainer.classList.toggle("invisible");

            cards.forEach(e => e.classList.add("invisible"));
        });
    });

    info.title.addEventListener("click", () => {
        infoContainer.classList.add("invisible");
        cards.forEach(e => e.classList.remove("invisible"));
    });
})();
