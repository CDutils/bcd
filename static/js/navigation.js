(() => {

    const tabs = document.querySelectorAll(".nav-links>li>a");
    const sections = document.querySelectorAll("section");

    for (const tab of tabs) {
        tab.addEventListener("click", (event) => {
            event.preventDefault();
            const id = tab.getAttribute("href").slice(1);
            const target = document.getElementById(id);

            setTimeout(() => {
                for (const section of sections) {
                    section.style.display = section.id === id ? "block" : "none";
                }
            }, 1000);

            tab.classList.add("active-link");
            for (const other of tabs) {
                if (other !== tab) {
                    other.classList.remove("active-link");
                }
            }
        });
    }

})()
