var clock = {
    hour: null,
    minute: null,
    seconds: null,
    period: null,
    day: null,
    weekday: null,
    month: null,
    year: null
};
var elements = {
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
setInterval(function () {
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    var now = new Date();
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    if (elements.hour)
        elements.hour.textContent = (_b = (_a = clock.hour) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '';
    if (elements.minute)
        elements.minute.textContent = (_d = (_c = clock.minute) === null || _c === void 0 ? void 0 : _c.toString()) !== null && _d !== void 0 ? _d : '';
    if (elements.seconds)
        elements.seconds.textContent = (_f = (_e = clock.seconds) === null || _e === void 0 ? void 0 : _e.toString()) !== null && _f !== void 0 ? _f : '';
    if (elements.period)
        elements.period.textContent = clock.period ? "\"".concat(clock.period, "\"") : '';
    if (elements.day)
        elements.day.textContent = (_h = (_g = clock.day) === null || _g === void 0 ? void 0 : _g.toString()) !== null && _h !== void 0 ? _h : '';
    if (elements.weekday)
        elements.weekday.textContent = clock.weekday ? "\"".concat(clock.weekday.toLowerCase(), "\"") : '';
    if (elements.month)
        elements.month.textContent = clock.month ? "\"".concat(clock.month.toLowerCase(), "\"") : '';
    if (elements.year)
        elements.year.textContent = (_k = (_j = clock.year) === null || _j === void 0 ? void 0 : _j.toString()) !== null && _k !== void 0 ? _k : '';
}
