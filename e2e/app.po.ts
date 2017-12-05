import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToCreateMeetup() {
    return browser.get('/create-meetup');
  }

  navigateToLogin() {
    return browser.get('/login');
  }

  navigateToHome() {
    return browser.get('/home');
  }

  navigateToSignUp() {
    return browser.get('/signup');
  }

  getParagraphText() {
    return element(by.css('app-root h2')).getText();
  }

  getCreateMeetupButton() {
    return element(by.className('create-meetup'));
  }

  getCreateMeetupButtonFooter() {
    return element(by.id('create-meetup-footer-link'));
  }

  getMeetUpCardTitle() {
    return element(by.css('mat-card-title')).getText();
  }

  getButton(index) {
    return element.all(by.tagName('button')).get(index);
  }

  getCreateMeetUpFormQuestions(index) {
    return element.all(by.css('h3')).get(index).getText();
  }

  selectLocation() {
    element.all(by.tagName('input')).get(0).click();
    element.all(by.tagName('a')).get(4).click();
    browser.sleep(1500);
  }

  enterDataIntoTextArea(index, message) {
    const firstTextBox = element.all(by.tagName('textarea')).get(index);
    const a = message;
    firstTextBox.clear();
    firstTextBox.sendKeys(a);
  }

  clickMeetUpGrid(index) {
    const firstGrid = element.all(by.css('mat-card')).get(index);
    console.log(firstGrid);
    firstGrid.click();
  }

  enterDataIntoTextBox(index, message) {
   const firstTextBox = element.all(by.tagName('input')).get(index);
   const a = message;
   firstTextBox.clear();
   firstTextBox.sendKeys(a);
  }

  clickNextButton(index) {
    element.all(by.tagName('button')).get(index).click();
    // browser.pause();
  }

  login() {
    const firstTextBox = element.all(by.tagName('input')).get(0);
    const secondTextBox = element.all(by.tagName('input')).get(1);
    const emailid = 'dmahendran@ufl.edu';
    const password = 123456 ;
    firstTextBox.clear();
    firstTextBox.sendKeys(emailid);
    secondTextBox.clear();
    secondTextBox.sendKeys(password);
    const submitButton = element.all(by.tagName('button')).get(0);
    submitButton.click();
  }


}
