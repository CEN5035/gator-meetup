import { AppPage } from './app.po';
import {browser, by, element, protractor} from 'protractor';

describe('gator-meetup App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display the page title correctly', () => {
    page.navigateToHome();
    expect(browser.getTitle()).toEqual('GatorMeetup');
  });

  it('Should display meetups grid title', () => {
    page.navigateToHome();
    expect(page.getParagraphText()).toEqual('Meetups Around You');
  });

  it('Create event button should open the create page', () => {
    page.navigateToLogin();
    page.login();
    page.getCreateMeetupButton().click();
    expect(browser.getCurrentUrl()).toContain('/create-meetup');
  });

  it('Create event text in footer should open the create page', () => {
    page.getCreateMeetupButtonFooter().click();
    expect(browser.getCurrentUrl()).toContain('/create-meetup');
  });

  it('should display Create meetup card', () => {
    page.navigateToLogin();
    page.login();
    page.navigateToCreateMeetup();
    expect(page.getMeetUpCardTitle()).toEqual('Create Meetup');
  });

  it('next button should be disabled since location is not entered', () => {
    page.navigateToCreateMeetup();
    expect(page.getButton(0).isEnabled()).toBeFalsy();
  });

  it('next button should be enabled after location is entered', () => {

    page.navigateToCreateMeetup();
    page.selectLocation();
    expect(page.getButton(0).isEnabled()).toBeTruthy();
  });

  // it('should display step 2 once location value is entered', () => {
  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   expect(page.getCreateMeetUpFormQuestions(1)).toEqual('What will your group meeting be about?');
  // });

  // it('should display step 2 once location value is entered and next button of step 2 should be inactive', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   expect(page.getButton(1).isEnabled()).toBeFalsy();
  // });

  // it('after agenda is entered step 2 next should be enabled', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   expect(page.getButton(1).isEnabled()).toBeTruthy();
  // });

  // it('should display step 3 once step 2 is successful', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   page.clickNextButton(1);
  //   expect(page.getCreateMeetUpFormQuestions(2)).toEqual('What is the name of the your new meeting?');
  // });

  // it('should not enable next button for text length less than 16', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   page.clickNextButton(1);
  //   page.enterDataIntoTextBox(2, 'UFEntertainment');
  //   page.enterDataIntoTextArea(0, 'lessthan15');
  //   expect(page.getButton(2).isEnabled()).toBeFalsy();
  // });

  // it('should not enable next button for if anyone of description or name is not filled', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   page.clickNextButton(1);
  //   page.enterDataIntoTextBox(2, 'UFEntertainment');
  //   expect(page.getButton(2).isEnabled()).toBeFalsy();
  // });

  // it('should not enable next button for text greater less than 60', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   page.clickNextButton(1);
  //   page.enterDataIntoTextBox(2, 'UFEntertainment');
  //   expect(page.getButton(2).isEnabled()).toBeFalsy();
  // });

  // it('step 3 next available once successful values are entered', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   page.clickNextButton(1);
  //   page.enterDataIntoTextBox(2, 'UFEntertainment');
  //   page.enterDataIntoTextArea(0, 'This sentence contains more than 15 characters');
  //   expect(page.getButton(2).isEnabled()).toBeTruthy();
  // });

  // it('step 4 available once step 3 is successful', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   page.clickNextButton(1);
  //   page.enterDataIntoTextBox(2, 'UFEntertainment');
  //   page.enterDataIntoTextArea(0, 'This sentence contains more than 15 characters');
  //   page.clickNextButton(2);
  //   expect(page.getCreateMeetUpFormQuestions(4)).toEqual('What it means to organize a meeting in UF?');
  // });

  // it('User is taken to HomePage after event creation', () => {

  //   page.navigateToCreateMeetup();
  //   page.selectLocation();
  //   page.clickNextButton(0);
  //   page.enterDataIntoTextBox(1, 'Entertainment');
  //   page.clickNextButton(1);
  //   page.enterDataIntoTextBox(2, 'UFEntertainment');
  //   page.enterDataIntoTextArea(0, 'This sentence contains more than 15 characters');
  //   page.clickNextButton(2);
  //   page.clickNextButton(3);
  //   expect(browser.getCurrentUrl()).toContain('/home');
  // });

});
