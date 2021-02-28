module.exports = (...arguments) => {
    const sharp = require('sharp');
    const { SOURCE } = require('../constant');

    const queue = [];

    for (let index = 1; index < arguments.length; index++) {
        const { key, value } = arguments[index];
        queue.push(sharp(arguments[SOURCE])[key](value));
    }

    Promise.all(queue)
        .then((info) => console.log('Completed !'))
        .catch((error) => console.error(error));
};
