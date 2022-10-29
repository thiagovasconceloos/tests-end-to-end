import signupPage from '../support/pages/signup'

describe('cadastro', function () {

    before(function(){
        cy.fixture('signup').then(function(signup){
            this.success = signup.success
            this.email_dup = signup.email_dup
            this.email_inv =  signup.email_inv
            
        })
    })

    context('quando o usuário é novato', function () {
        before(function () {
            cy.task('removeUser', this.success.email)
                .then(function (result) {
                    console.log(result)
                })
        })

        it('deve cadastrar com sucesso', function () {
            signupPage.go()
            signupPage.form(this.success)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        })
    }) 


    context('quando o email já existe', function () {
        before(function () {
        
        
            cy.task('removeUser', this.email_dup.email)
        .then(function (result) {
            console.log(result)
        })
           
           
            cy.request(

                'POST',
                'http://localhost:3333/users',
                this.email_dup
             ).then((res) => {
       
                expect(res.status).to.eq(200)
       
             })
        })

        it('não deve cadastrar o usuário', function () {
            signupPage.go()
            signupPage.form(this.email_dup)
            signupPage.submit()
            signupPage.toast.shouldHaveText('Email já cadastrado para outro usuário.')
        })

    })



    context('quando o e-mail é incorreto', ()=>{

       const user =  {
            name: 'Maria Vasconcelos',
            email: 'vasconcelos.samuraibs.com',
            password: 'pwd123',
        
        }
     
      it.only('deve exibir uma mensagem de alerta', ()=>{ 
        signupPage.go()
        signupPage.form(user)
        signupPage.submit()
        signupPage.alertHaveText('Informe um email válido')


    }) 

    }) 











})