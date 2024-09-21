"use strict";
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
// Body
const body = document.body;
body.className = "bg-color min-h-screen text-center content-center text-slate-300";
const clockElement = document.createElement("span");
body.appendChild(clockElement);
setInterval(() => {
    const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const now = new Date();
    clock.hour = now.getHours();
    clock.minute = now.getMinutes();
    clock.seconds = now.getSeconds();
    clock.period = (now.getHours() >= 12) ? "PM" : "AM";
    clock.day = now.getDate();
    clock.weekday = days[now.getDay()];
    clock.month = months[now.getMonth()];
    clock.year = now.getFullYear();
    clockElement.textContent = JSON.stringify(clock, null, 4);
}, 1000);
