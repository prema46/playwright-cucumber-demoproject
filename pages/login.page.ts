import { Page } from "@playwright/test"

export class Login {
    static validateTitle() {
      throw new Error('Method not implemented.')
    }
    static loginAsUser(userName: any) {
      throw new Error('Method not implemented.')
    }

    private readonly page: Page
    private readonly password: string = 'secret_sauce'
    private readonly passwordField: string = '//*[@id="password"]'
    private readonly userNameField: string = '//*[@id="user-name"]'
    private readonly loginButton: string = '//*[@id="login-button"]'
    private readonly locked_out_user_error: string = '//*[@id="login_button_container"]/div/form/div[3]/h3'


    constructor(page: Page) {
        this.page = page;
    }

    

    public async validateTitle(expectedTitle: string) {
        const pageTitle = await this.page.title();
        if (pageTitle !== expectedTitle) {
          throw new Error(`Expected title to be ${expectedTitle} but found ${pageTitle}`);
        }
    }

    public async loginAsUser(userName: string) {
        await this.page.locator(this.userNameField).fill(userName)
        await this.page.locator(this.passwordField).fill(this.password)
        await this.page.locator(this.loginButton).click()
    }

    public async locked_out_user_validation(expectedError: string) {
      const error = await this.page.textContent(this.locked_out_user_error);
      if(error !== expectedError){
        throw new Error(`Expected error message should be ${expectedError} but found ${error} `);
      }

  }
}