import signupPage from '../../pages/signup/signup.page';

describe('Notarize Signer Signup Page', () => {
    it('Go to the sign up upload page', () => {
        signupPage.openSignupPage('https://app.notarize.com/signup/upload');
    }) 

    it('Create a new account', () => {
        signupPage.uploadADocument('../../assets/sample.pdf');
        signupPage.emailAndPasswordCreation('ayoraheem7@gmail.com', 'Notarize-me2021');
    })
})