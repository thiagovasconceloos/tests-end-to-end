import {el} from './elements'

import toast from '../../components/toast'

class SignupPage {

    constructor(){

    this.toast = toast
    
    
    }  
    



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


     alertHaveText(expectedText) {

     cy.contains('.alert-error',expectedText)
     .should('be.visible')
    }
}


export default  new SignupPage()