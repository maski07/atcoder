const fetch = require('node-fetch');

const data = 
    fetch('https://ticket.tickebo.jp/show/event.html?info=10369')
    .then(res => res.data);

console.log(data);