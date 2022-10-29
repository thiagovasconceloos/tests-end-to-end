import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'
import login from '../support/pages/login'



describe('login', () => {

  context('quando o usuario é muito bom', () => {

    const user = {
      name: 'Jassa Vasconcelos',
      email: 'jassa@samuraibs.com',
      password: 'pwd123',
      is_provider: true

    }



    before(function () {
      cy.postUser(user)


    })



    it('deve logar com sucesso', () => {

      loginPage.go()
      loginPage.form(user)
      loginPage.submit()
      dashPage.header.userLoggedIn(user.name)


    })





  })




  context.only('quando usuario é bom mas a senha é incorreta', () => {
    let user = {

      name: 'Celso Kumura',
      email: 'kamura@samuraibs.com',
      password: 'pwd123',
      is_provider: true

    }
    before(() => {

      cy.postUser(user).then(()=> {

        user.password = 'abc123'

      })     


    })

    it('deve notificar erro de credenciais', () => {

         loginPage.go()
         loginPage.form(user)
         loginPage.submit()
         cy.wait(5000)





    })







  })



})