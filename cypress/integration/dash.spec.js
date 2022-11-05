
import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'
import { customer, provider, appointment } from '../support/factories/dash'


describe('dashboard', function () {

    context(' quando o cliente faz um agendamento no app mobile', function () {
       

        before(function () {

            cy.postUser(customer)
            cy.postUser(provider)
            cy.apiLogin(customer)

            cy.log('Conseguimos pegar o token' + Cypress.env('apiToken'))

            cy.setProviderId(provider.email)
            cy.createAppointment(appointment.Hour)
        })

        it('o mesmo deve ser exibido no dashboard', function () {

            const date = Cypress.env('appointmentDate')
            //cy.uiLogin(provider)

            cy.apiLogin(provider,true)
            dashPage.calendarShouldBeVisible()
            dashPage.selectDay(date)
            dashPage.appointmentShouldBe(customer, appointment.Hour)


        })











    })









})

