class SignupPage {

    go() {

        cy.visit('/signup')


    }



    form(dados) {

        cy.get('input[placeholder^="Nome"]').type(dados.name)
        cy.get('input[placeholder$="email"]').type(dados.email)
        cy.get('input[placeholder*="senha"]').type(dados.password)


    }


    submit() {


        cy.contains('button', 'Cadastrar').click()



    }



    toastHaveText(expectText) {

        cy.get('.toast')
            .should('be.visible')
            .find('p')
            .should('have.text', expectText)


    }

}


export default  new SignupPage()