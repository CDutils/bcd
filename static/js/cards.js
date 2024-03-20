(() => {
    const descriptions = {
        "TM01": "1",
        "TC": "2",
        "TM1": "3",
        "TTW": "4"
    }

    const cards = document.querySelectorAll(".card");

    const infoContainer = document.querySelector(".subject-info");
    const infoTitle = infoContainer.querySelector(".subject-title");
    const infoTime = infoContainer.querySelector(".subject-time");
    const infoDescription = infoContainer.querySelector(".subject-description");

    cards.forEach((card) => {
        card.addEventListener("click", () => {
            const cardId = card.querySelector(".card .text").innerHTML;
            const subject = window.subjects.filter((el) => el.id == cardId.split(" ")[1])[0];

            infoTitle.innerHTML = subject.name;
            infoTime.innerHTML = `Horário: ${subject.time}`;
            infoDescription.innerHTML = descriptions[subject.id];

            infoContainer.classList.remove("invisible");
        });
    });

}) ()