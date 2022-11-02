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




  context('quando usuario é bom mas a senha é incorreta', () => {
    let user = {

      name: 'Celso Kumura',
      email: 'kamura@samuraibs.com',
      password: 'pwd123',
      is_provider: true

    }
    before(() => {

      cy.postUser(user).then(() => {

        user.password = 'abc123'

      })


    })

    it('deve notificar erro de credenciais', () => {

      loginPage.go()
      loginPage.form(user)
      loginPage.submit()
      loginPage.toast.shouldHaveText('Ocorreu um erro ao fazer login, verifique suas credenciais.')




    })







  })


  context('quando  o formato do e-mail  é invalido', () => {

    const emails = [

      'mail.com.br',
      '@gmail.com',
      'yahoo.com',
      '@',
      'thiago@',
      '$%^^S**',
      'xpto123'


    ]
    before(() => {

      loginPage.go()

    })

    emails.forEach((e) => {


      it('não deve logar com o e-mail: ' + e, () => {

        const user = { email: e, password: 'pwd123' }


        loginPage.form(user)
        loginPage.submit()
        loginPage.alert.haveText('Informe um email válido')

      })





    })


  })


  context('quando não preencho nenhum dos campos', function () {
    const alertMessages = [
      'E-mail é obrigatório',
      'Senha é obrigatória'
    ]

    before(() => {
      loginPage.go()
      loginPage.submit()
    })

    alertMessages.forEach(function (alert) {
      it('deve exibir ' + alert.toLowerCase(), function () {
        loginPage.alert.haveText(alert)
      })
    })
  })


})