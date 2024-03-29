import { Given,Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';


Given ('I open the {string}', async function (url){
   await getPage().goto(url);
   await getPage().waitForTimeout(2000);
   console.log("Navigated to the application ");
})

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

When('I will login as {string}', async (userName ) => {
  await new Login(getPage()).loginAsUser(userName);
 });

 Then('user gets error mesaage {string}', async(expectedError) => {
  await new Login(getPage()).locked_out_user_validation(expectedError);
 })
 
