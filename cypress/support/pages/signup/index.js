import {el} from './elements'

import toast from '../../components/toast'
import alert from '../../components/alert'

class SignupPage {

    constructor(){

    this.toast = toast
    this.alert = alert
    
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