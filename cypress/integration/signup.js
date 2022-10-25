it('deve cadastrar um novo usuario',()=>{

  const dados = {
     name : 'Thiago Vasconcelos',
     email: 'thiago@samuraibs.com',
     password: 'pwd123'


  }
   

    cy.visit('/signup')

    cy.get('input[placeholder="Nome"]').type(dados.name)
    cy.get('input[placeholder="E-mail"]').type(dados.email)
    cy.get('input[placeholder="Senha"]').type(dados.password)

})