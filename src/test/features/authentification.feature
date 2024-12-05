Feature: Authentification

    Background: 
        Given User navigate to popote application
        And user is on the popote site login page

    Scenario: User successfully connects with valid email information
        And user selects the type of connection email
        And user enter valid email as "admin@popotegroup.com"
        And user enter valid password as "kpHTUPeS9VEftLj!"
        When user click on connection button 
        Then user should be redirect on dashbord

    #Scenario: User successfully connects with valid phone number information
    #    Given user selects the type of connection phone number
    #    And user enter valid phone number as ""
    #    And user click on button Send the code OPT
    #    And user enter code OTP
    #    When user click on connection button 
    #    Then user should be redirect on dashbord

    #Scenario: User failure connection with invalid email information
    #    Given user selects the type of connection email
    #    And user enter valid email as "careineokou@gmail.com"
    #    And user enter valid password as "Test"
    #    When user click on connection button 
    #    Then user should see error message
