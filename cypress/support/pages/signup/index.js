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

        cy.contains(el.title)
        .should('be.visible')
    }



    form(user) {

       
            cy.get(el.name).type(user.name)
            cy.get(el.email).type(user.email)
            cy.get(el.password).type(user.password)
       


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