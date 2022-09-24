const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");

const daysEl = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

monthEl.innerText = months[monthInx];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for (let index = firstDay; index > 0; index--) {
  days += `<div class="empty"></div>`;
}

for (let index = 1; index <= lastDay; index++) {
  if (index === new Date().getDate()) {
    days += `<div class="today">${index}</div>`;
  } else {
    days += `<div>${index}</div>`;
  }
}

daysEl.innerHTML = days;
