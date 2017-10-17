import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToCreateMeetup() {
    return browser.get('/create-meetup');
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

  enterDataIntoTextArea(index, message) {
    const firstTextBox = element.all(by.tagName('textarea')).get(index);
    const a = message;
    firstTextBox.clear();
    firstTextBox.sendKeys(a);
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
}
