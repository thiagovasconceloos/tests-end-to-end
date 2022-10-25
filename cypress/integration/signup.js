import { faker } from '@faker-js/faker'

it('deve cadastrar um novo usuario',()=>{
 
   

  const dados = {
     name : 'Thiago Vasconcelos',
     email: faker.internet.email(),
     password: 'pwd123'


  }
   

    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(dados.name)
    cy.get('input[placeholder="E-mail"]').type(dados.email)
    cy.get('input[placeholder="Senha"]').type(dados.password)

    cy.contains('button','Cadastrar').click()

    cy.get('.toast')
    .should('be.visible')
    .find('p')
    .should('have.text','Agora você pode fazer seu login no Samurai Barbershop!') 



    

})