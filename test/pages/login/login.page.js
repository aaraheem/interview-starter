import * as page from '../page';
import loginSelectors from './login.selectors';

const openLoginPage = url => {
  page.open(url);
  $(loginSelectors.emailInput).waitForDisplayed();
}

const userSignIn = (email, password) => {
  const emailInput = $(loginSelectors.emailInput);
  const passwordInput = $(loginSelectors.passwordInput);
  const continueButton = $(loginSelectors.continueButton);

  emailInput.setValue(email);

  continueButton.waitForClickable();
  continueButton.click();

  passwordInput.waitForClickable();
  passwordInput.setValue(password);

  continueButton.waitForClickable();
  continueButton.click();
};

const loginPage = {
  openLoginPage,
  userSignIn
}

export default loginPage;