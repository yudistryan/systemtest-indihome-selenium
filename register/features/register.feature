# ./features/register.feature

Feature: Register on the website
    As a user
    I want to be able to register

@sucess
    Scenario: User success to register on the website
        Given user browse indihome page
        Then user click daftar akun
        And fill Email field
        And fill Nama field
        And fill Nomor HP
        And select Jenis Kelamin
        And select Jenis Kelamin Wanita
        And fill Password
        And fill Konfirmasi Password
        And check Setuju
        And user click Register Button
        When page is loading
        Then verify alert will be appeared

@failed
    Scenario: User failed to register on the website because user already registered
        Given user browse indihome page
        Then user click daftar akun
        And fill Email Registered field
        And fill Nama Registered field
        And fill Nomor HP Registered
        And select Jenis Kelamin
        And select Jenis Kelamin Wanita
        And fill Password
        And fill Konfirmasi Password
        And check Setuju
        And user click Register Button
        When page is loading
        Then failed alert will be appeared 1

@failed
    Scenario: User failed to register on the website because user skip check setuju syarat dan ketentuan
        Given user browse indihome page
        Then user click daftar akun
        And fill Email field
        And fill Nama field
        And fill Nomor HP
        And select Jenis Kelamin
        And select Jenis Kelamin Wanita
        And fill Password
        And fill Konfirmasi Password
        When user click Register Button
        Then failed alert will be appeared 2

        
@failed        
    Scenario: User failed to register on the website because user input wrong confirmation password
        Given user browse indihome page
        Then user click daftar akun
        And fill Email field
        And fill Nama field
        And fill Nomor HP
        And select Jenis Kelamin
        And select Jenis Kelamin Wanita
        And fill Password
        When user fill Konfirmasi Password Salah
        Then user see element konfirmasi password tidak sama