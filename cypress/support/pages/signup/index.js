import {el} from './elements'

class SignupPage {

    go() {

        cy.visit('/signup')


    }



    form(dados) {

        cy.get(el.name).type(dados.name)
        cy.get(el.email).type(dados.email)
        cy.get(el.password).type(dados.password)


    }


    submit() {


        cy.contains(el.SignupButton).click()



    }



    toastHaveText(expectText) {

        cy.get(el.toast)
            .should('be.visible')
            .find('p')
            .should('have.text', expectText)


    }

}


export default  new SignupPage()