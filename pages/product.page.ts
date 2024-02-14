import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    //private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly inventory_list: string = '//*[@id="inventory_container"]/div/div'
    private  cartButton = '//*[@id="shopping_cart_container"]/a';
    private checkOut =  '//*[@id="checkout"]';
    private firstName = '//*[@id="first-name"]';
    private lastName = '//*[@id="last-name"]';
    private zip = '//*[@id="postal-code"]';
    private continueButton = '//*[@id="continue"]';
    private finish = '//*[@id="finish"]'
    private orderCompleted  = '//*[@id="checkout_complete_container"]/h2';
    

    constructor(page: Page) {
        this.page = page;
    }


// Search item by name  

   public async filterItems(searchName: string ) {
      const listItems = await this.page.$$(this.inventory_list)
    //const needToFind = 'Sauce Labs Bike Light';
       for(const listItem of listItems){
        const itemNeed = await listItem.$('//*[@class="inventory_item_description"] /div/a/div');
        const textContent = await itemNeed?.innerHTML();
        if(textContent == searchName){
            const addToCart = await listItem.$('//*[@class="pricebar"]/button');
            await addToCart?.click();
          return addToCart
        }
       
    }
}

//  Go to cart page and validate order placed 
    public async validateCartItems() {
     await this.page.locator(this.cartButton).click();
     await this.page.locator(this.checkOut).click();
     const pageTitle = this.page.url();
     console.log("Page Title:", pageTitle);
     
    }

// Fill order form and address     
    public async fillFormInfo() {
        await this.page.locator(this.firstName).fill("this.firstName");
        await this.page.locator(this.lastName).fill("this.lastName");
        await this.page.locator(this.zip).fill("90800");
        await this.page.locator(this.continueButton).click();
        await this.page.locator(this.finish).click();
        await this.page.waitForTimeout(2000);
    }
// Validate order complateded message 
    public async validateOrderComplete(orderCompleteExpcted : string){
     const completedMsg=   await this.page.locator(this.orderCompleted).innerHTML();
     console.log("Order status:", completedMsg)
     if(completedMsg !== orderCompleteExpcted ){
        throw new Error(`Expected title to be ${completedMsg} but found ${orderCompleteExpcted}`);
     }
     await this.page.waitForTimeout(5000);
    }


}