describe('cadastro', () => {

   const dados = {
      name: 'Thiago Vasconcelos',
      email: 'thiago@samuraibs.com',
      password: 'pwd123',
      is_provider: true
   }

   it('deve cadastrar um novo usuario', () => {




      cy.task('removeUser', dados.email)
         .then((result) => {
            console.log(result)

         })

      cy.visit('/signup')

      cy.get('input[placeholder="Nome"]').type(dados.name)
      cy.get('input[placeholder="E-mail"]').type(dados.email)
      cy.get('input[placeholder="Senha"]').type(dados.password)


      cy.contains('button', 'Cadastrar').click()



      cy.get('.toast')
         .should('be.visible')
         .find('p')
         .should('have.text', 'Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')





   })



   it.only('deve exibir e-mail ja cadastrado', () => {

      cy.task('removeUser', dados.email)
         .then((result) => {
            console.log(result)

         })


      cy.request(

         'POST',
         'http://localhost:3333/users',
         dados
      ).then((res) => {

         expect(res.status).to.eq(200)

      })



      cy.visit('/signup')

      cy.get('input[placeholder="Nome"]').type(dados.name)
      cy.get('input[placeholder="E-mail"]').type(dados.email)
      cy.get('input[placeholder="Senha"]').type(dados.password)




      cy.contains('button', 'Cadastrar').click()


      cy.get('.toast')
         .should('be.visible')
         .find('p')
         .should('have.text', 'Email já cadastrado para outro usuário.')





   })

})