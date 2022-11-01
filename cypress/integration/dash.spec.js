describe('dashboard', function () {

    context(' quando o cliente faz um agendamento no app mobile', function () {
        const data = {
            customer: {

                name: 'Nikki Six',
                email: 'sixx@mtleycrue.com',
                password: 'pwd123',
                is_provider: false
            },
            provider: {
                name: 'Ramon Valdes',
                email: 'ramon@televisa.com',
                password: 'pwd123',
                is_provider: true

            }

        }

        before(function () {

            cy.postUser(data.customer)
            cy.postUser(data.provider)
            cy.apiLogin(data.customer)

            cy.log('Conseguimos pegar o token' + Cypress.env('apiToken'))

            cy.setProviderId(data.provider.email)
        })

        it('o mesmo deve ser exibido no dashboard', function () {


            //console.log(data)

        })











    })









})


Cypress.Commands.add('setProviderId', function (providerEmail) {

    cy.request({

        method: 'GET',
        url: 'http://localhost:3333/providers',
        headers: {

            authorization: 'Bearer ' + Cypress.env('apiToken')
        }


    }).then(function (response) {

        expect(response.status).to.eq(200)
        const providerList = response.body

        providerList.forEach( function(provider) {
                 if (provider.email === providerEmail){
                    Cypress.env('providerId',provider.id)
                 }
        });
    })


})





Cypress.Commands.add('apiLogin', function (user) {


    const payload = {

        email: user.email,
        password: user.password


    }

    cy.request({

        method: 'POST',
        url: 'http://localhost:3333/sessions',
        body: payload


    }).then(function (response) {

        expect(response.status).to.eq(200)
        Cypress.env('apiToken', response.body.token)


    })







})