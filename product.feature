Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  When User login as 'standard_user'
  Then User filter item by name 'Sauce Labs Bike Light'
  Then Select the cart ad checkout
  Then Fill form info as 
  Then Validate the text 'Thank you for your order!'
  #Then Finish and Validate successful purchase text
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the 'firstName', 'lastName', '90298'
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'