const clock = document.getElementById("clock");
const date = document.getElementById("date");
const timezone = document.getElementById("timezone");

const dkTime = document.getElementById("dkTime");
const ukTime = document.getElementById("ukTime");
const usTime = document.getElementById("usTime");
const jpTime = document.getElementById("jpTime");

const themeBtn = document.getElementById("themeBtn");

const note = document.getElementById("note");
const saveNote = document.getElementById("saveNote");

const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const engine = document.getElementById("searchEngine");



function updateClock() {

    const now = new Date();

    clock.textContent = now.toLocaleTimeString();

    date.textContent = now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    timezone.textContent =
        "Timezone: " + Intl.DateTimeFormat().resolvedOptions().timeZone;


    dkTime.textContent = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/Copenhagen"
    });

    ukTime.textContent = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London"
    });

    usTime.textContent = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York"
    });

    jpTime.textContent = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Tokyo"
    });

}

updateClock();

setInterval(updateClock, 1000);



themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeBtn.textContent = "Dark Mode";

        localStorage.setItem("theme", "light");

    } else {

        themeBtn.textContent = "Light Mode";

        localStorage.setItem("theme", "dark");

    }

});



if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    themeBtn.textContent = "Dark Mode";

} else {

    themeBtn.textContent = "Light Mode";

}



if (localStorage.getItem("note")) {

    note.value = localStorage.getItem("note");

}



saveNote.addEventListener("click", function () {

    localStorage.setItem("note", note.value);

    alert("Note saved!");

});



form.addEventListener("submit", function (event) {

    event.preventDefault();

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    let url = "";

    if (engine.value === "google") {

        url = "https://www.google.com/search?q=" + encodeURIComponent(text);

    }

    if (engine.value === "duckduckgo") {

        url = "https://duckduckgo.com/?q=" + encodeURIComponent(text);

    }

    if (engine.value === "bing") {

        url = "https://www.bing.com/search?q=" + encodeURIComponent(text);

    }

    window.open(url, "_blank");

});