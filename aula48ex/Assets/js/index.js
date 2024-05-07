const t = document.querySelector('h1');

const nameDay = ['Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado','Domingo'];
const nameMonth = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','outubro','Novembro','Dezembro'];

const dataNow = new Date();
t.innerHTML = `${nameDay[0]}, ${dataNow.getDate()} de ${nameMonth[4]} de ${dataNow.getFullYear()} </br> ${dataNow.getHours()}:${dataNow.getMinutes()}`
