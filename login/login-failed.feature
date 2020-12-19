# ./features/login-failed.feature

Feature: Login on the website indihome
    As a user
    I want to be not able to login
    
@failed
    Scenario: User failed to login on the website indihome
        Given user browse indihome1
        And user click button masuk1
        And user fill email atau nomor hp field with wrong data
        And user click checkbox ingat saya1
        When user click button login1
        Then user get alert belum terdaftar