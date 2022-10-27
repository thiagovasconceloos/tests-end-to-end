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



}


export default  new SignupPage()