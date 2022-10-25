it('deve cadastrar um novo usuario',()=>{
 
   

  const dados = {
     name : 'Thiago Vasconcelos',
     email: 'thiago@samuraibs.com',
     password: 'pwd123'


  }
   cy.task('removeUser',dados.email)
   .then((result)=>{
    console.log(result)
       
   })

    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(dados.name)
    cy.get('input[placeholder="E-mail"]').type(dados.email)
    cy.get('input[placeholder="Senha"]').type(dados.password)

    // cy.intercept('POST','/users',{

    //   statusCode: 200
       
    // }).as('postUser')


    cy.contains('button','Cadastrar').click()

   // cy.wait('@postUser')

    cy.get('.toast')
    .should('be.visible')
    .find('p')
    .should('have.text','Agora você pode fazer seu login no Samurai Barbershop!') 



    

})