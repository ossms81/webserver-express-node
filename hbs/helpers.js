const hbs = require('hbs');

hbs.registerHelper('getAnio', () => {

    return new Date().getFullYear()

})

hbs.registerHelper('capitalize', (texto) => {

    let words = texto.split(' ')

    words.forEach((element, i) => {

        words[i] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()

    });

    return words.join(' ')

})