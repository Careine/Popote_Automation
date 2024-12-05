const { faker } = require('@faker-js/faker');

function generateFormData() {
    return {
        // Génération d'un numéro de téléphone avec indicatif du Bénin
        lastname: faker.person.lastName(),
        firstname: faker.person.firstName(),
        email: faker.internet.email(),
        //phone_number: faker.internet.,
        phone_number: `${faker.phone.number('## ## ## ##')}`
    };
}

module.exports = generateFormData;