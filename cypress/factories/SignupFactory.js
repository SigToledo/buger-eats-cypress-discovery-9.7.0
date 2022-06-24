var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '41999022244',
            address: {
                postalcode: '81560150',
                street: 'Rua Gabirobas',
                number: '148',
                detais: 'Tirol das Torres - Casa 31',
                district: 'Uberaba',
                city_state: 'Curitiba/PR'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}