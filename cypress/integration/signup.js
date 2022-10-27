import signupPage from '../support/pages/signup'


describe('cadastro', () => {

   const dados = {
      name: 'Thiago Vasconcelos',
      email: 'thiago@samuraibs.com',
      password: 'pwd123',
      is_provider: true
   }

   before(() => {


      cy.task('removeUser', dados.email)
         .then((result) => {
            console.log(result)

         })


   })



   it('deve cadastrar um novo usuario', () => {




      signupPage.go()
      signupPage.form(dados)
      signupPage.submit()
      signupPage.toastHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')


   })



   it.only('deve exibir e-mail ja cadastrado', () => {
      cy.request(

         'POST',
         'http://localhost:3333/users',
         dados
      ).then((res) => {

         expect(res.status).to.eq(200)

      })

      signupPage.go()
      signupPage.form(dados)
      signupPage.submit()
      signupPage.toastHaveText('Email já cadastrado para outro usuário.')


   })

})