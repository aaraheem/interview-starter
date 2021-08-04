import * as page from '../page';
import signUpselectors from './signup.selectors';
import path from 'path';



const openSignupPage = url => {
    page.open(url);
    $(signUpselectors.addADocumentButton).waitForDisplayed();
};

const uploadADocument = (pathString) => {
    const filePath = path.join(__dirname, pathString);
    const uploadArea = $(signUpselectors.fileUploaderInput);
    const continueToDoc = $(signUpselectors.continueToDocumetationButton);
    const previewContButton = $(signUpselectors.previewContinueButton);
    const illustrationModalContainer = $(signUpselectors.illustrationModalContainer);

    const remoteFilePath = browser.uploadFile(filePath);

    browser.execute(selector => {
        document.querySelector(selector).style.display = 'block';
    }, signUpselectors.fileUploaderInput);

    uploadArea.waitForDisplayed();
    uploadArea.setValue(remoteFilePath);

    continueToDoc.waitForClickable();
    continueToDoc.click();

    previewContButton.waitForClickable();
    previewContButton.click();

    illustrationModalContainer.waitForDisplayed();
}

const emailAndPasswordCreation = (email, password) => {
    const emailInput = $(signUpselectors.emailInput);
    const passwordInput = $(signUpselectors.passwordInput);
    const continueButtonModal = $(signUpselectors.continueButtonModal);

    emailInput.setValue(email);
    continueButtonModal.waitForClickable();
    continueButtonModal.click();

    passwordInput.waitForDisplayed();
    passwordInput.setValue(password)
    continueButtonModal.waitForClickable();
    continueButtonModal.click();
}

const signupPage = {
    openSignupPage,
    uploadADocument,
    emailAndPasswordCreation
}

export default signupPage;