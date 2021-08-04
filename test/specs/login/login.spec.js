import loginPage from "../../pages/login/login.page";
import loginSelectors from '../../pages/login/login.selectors';

describe('Notarize Signer Login Page', () => {
  it('should open the login page', () => {
    loginPage.openLoginPage('https://app.notarize.com/login');

    expect(browser).toHaveTitle('Notarize | Login');
  });

  describe('Login elements renderes', () => {
    it('Email input field', () => {
      const emailInput = $(loginSelectors.emailInput);
      expect(emailInput).toBeDisplayed();
    });

    it('Continue Button', () => {
      const continueBtn = $(loginSelectors.continueButton);

      expect(continueBtn).toBeDisplayed();
      expect(continueBtn).toBeDisabled();
    });

    it('Signin with Google button', () => {
      const signUpWithGoogleButton = $(loginSelectors.signUpWithGoogleButton);

      expect(signUpWithGoogleButton).toBeDisplayed();
    });
  });

  describe('User can login', () => {
    it('Happy path', () => {
      const headerElem = $(loginSelectors.headerElem);
      loginPage.userSignIn('ayoraheem7@gmail.com', 'Notarize-me2021');

      headerElem.waitForExist();
    });
  });
});
