import { Given,Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Login } from '../pages/login.page';

Given('I open the  {string}', async (url ) => {
  await getPage().goto(url);
  await getPage().waitForTimeout(2000);
  console.log("Navigated to the application ");
 });

 When('User login as {string}', async (userName ) => {
  await new Login(getPage()).loginAsUser(userName);
 });
 
Then('User filter item by name {string}', async (searchName) => {
  await new Product(getPage()).filterItems(searchName);
});

Then('Select the cart ad checkout', async () => {
  await new Product(getPage()).validateCartItems();
});

Then('Fill form info as', async () =>{
  await new Product(getPage()).fillFormInfo();
  
});

Then ('Validate the text {string}', async(orderCompleteExpcted)=>{
 await new Product(getPage()).validateOrderComplete(orderCompleteExpcted);
})


