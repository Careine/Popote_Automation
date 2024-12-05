Feature: CRUD Categories

    Background: user connected
        Given User navigate to popote application
        And user is on the popote site login page
        And user selects the type of connection email
        And user enter valid email as "admin@popotegroup.com"
        And user enter valid password as "kpHTUPeS9VEftLj!"
        And user click on connection button 
        And user should be redirect on dashbord
        And I click on account menu
        And I should be redirect on list of Categories
    
    Scenario: Create new categorie
        When I click on button add categorie
        And I enter categorie name as "<CatName>"
        And I choose img 
        And I click on button save 
        And I should see successfully message

    Scenario: Update categorie
        When I enter the categorie name as "<CatName>"
        And I click on edit button



    