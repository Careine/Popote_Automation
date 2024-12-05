Feature: CRUD User Account

    Background: user connected
        Given User navigate to popote application
        And user is on the popote site login page
        And user selects the type of connection email
        And user enter valid email as "admin@popotegroup.com"
        And user enter valid password as "kpHTUPeS9VEftLj!"
        And user click on connection button 
        And user should be redirect on dashbord
        And I click on account menu
        And I should be redirect on list of users
        And I navigate to New user page
    
    Scenario: Create user account
        When I enter surname as ""
        And I enter firstname as ""
        #And I enter phone_number as "96402527"
        And I enter email as ""
        And I select the role
        And I click on button save
        Then I should see successfully message

    # Scenario: Create user account with invalid format email and phone number
    #     When I enter surname as "surname"
    #     And I enter firstname as "firstname"
    #     And I enter fixe phone number as "0758602455"
    #     And I enter invalid email as "tests@"
    #     And I select the role
    #     And I click on button save
    #     Then I should see failure message
    
    # Scenario: Recherche user
    #     When I enter user email as "email"
    #     Then I should see the list of users containing only search information

    # Scenario: Update user information
    #     When I click on button edit
    #     And I should be redirect on udapte page
    #     And I modify user surname as "surname"
    #     And I click on button save
    #     Then I should see successfully message

    # Scenario: Delete user information
        When I click on button Delete
        Then I should see successfully message
        And I click OK to redirect on the list of users
