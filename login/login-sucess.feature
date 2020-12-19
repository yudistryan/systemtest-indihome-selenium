# ./features/login-success.feature

Feature: Login on the website indihome
    As a user
    I want  to be able to login

    @success
    Scenario: User success to login on the website indihome
        Given user browse indihome
        And user click button masuk
        And user fill email atau nomor hp field with true data
        And user click checkbox ingat saya
        When user click button login
        Then user get pop up verifikasi akun