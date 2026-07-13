const clock = document.getElementById("clock");
const date = document.getElementById("date");
const timezone = document.getElementById("timezone");

function updateClock() {

    const now = new Date();

    clock.textContent = now.toLocaleTimeString();

    date.textContent = now.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    timezone.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
}
updateClock();
setInterval(updateClock, 1000);
