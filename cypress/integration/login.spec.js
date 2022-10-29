import loginPage from '../support/pages/login'
import dashPage from '../support/pages/dash'



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








})