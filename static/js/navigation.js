(() => {

    const tabs = document.querySelectorAll(".nav-links>li>a");
    const sections = document.querySelectorAll("section");

    for (const tab of tabs) {
        tab.addEventListener("click", (event) => {
            event.preventDefault();
            const id = tab.getAttribute("href");
            const target = document.querySelector(id);
            target.scrollIntoView();

            tab.classList.add("active-link");
            for (const other of tabs) {
                if (other !== tab) {
                    other.classList.remove("active-link");
                }
            }
        });
    }

}) ()