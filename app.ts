interface ClockKeyType {
    hour: number | null,
    minute: number | null,
    seconds: number | null,
    period: string | null,
    day: number | null,
    weekday: string | null,
    month: string | null,
    year: number | null
}

const clock: ClockKeyType = {
    hour: null,
    minute: null,
    seconds: null,
    period: null,
    day: null,
    weekday: null,
    month: null,
    year: null
};

const elements = {
    hour: document.getElementById("nowHour"),
    minute: document.getElementById("nowMinute"),
    seconds: document.getElementById("nowSeconds"),
    period: document.getElementById("nowPeriod"),
    day: document.getElementById("nowDay"),
    weekday: document.getElementById("nowWeekday"),
    month: document.getElementById("nowMonth"),
    year: document.getElementById("nowYear")
};

document.body.className = "bg-bgColor min-h-screen content-center text-slate-300";

setInterval(() => {
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const now = new Date();

    clock.hour = now.getHours();
    clock.minute = now.getMinutes();
    clock.seconds = now.getSeconds();
    clock.period = now.getHours() >= 12 ? "pm" : "am";
    clock.day = now.getDate();
    clock.weekday = days[now.getDay()];
    clock.month = months[now.getMonth()];
    clock.year = now.getFullYear();

    updateDisplay();
}, 1000);

function updateDisplay() {
    if (elements.hour) elements.hour.textContent = clock.hour?.toString() ?? '';
    if (elements.minute) elements.minute.textContent = clock.minute?.toString() ?? '';
    if (elements.seconds) elements.seconds.textContent = clock.seconds?.toString() ?? '';
    if (elements.period) elements.period.textContent = clock.period ? `"${clock.period}"` : '';
    if (elements.day) elements.day.textContent = clock.day?.toString() ?? '';
    if (elements.weekday) elements.weekday.textContent = clock.weekday ? `"${clock.weekday.toLowerCase()}"` : '';
    if (elements.month) elements.month.textContent = clock.month ? `"${clock.month.toLowerCase()}"` : '';
    if (elements.year) elements.year.textContent = clock.year?.toString() ?? '';
}
