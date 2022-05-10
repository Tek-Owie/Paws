module.exports = function() {
    const faker = require('@ngneat/falso');
    const _ = require('lodash');

    return {
        staff: _.times(3, (n) => {
            return {
                id: n,
                name: faker.randFullName(),
                avatar: faker.randAvatar(),
                quote: faker.randQuote()
            }
        })
    }
}