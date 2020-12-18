Feature: Cek ketersediaan
    As a user
    I want to be able to know which location that indihome's service covered
    
    # Background: Get in Cek Ketersediaan page
    #     Given user browse Cek Ketersediaan page

    @success
    Scenario: Service available location
        Given user browse Cek Ketersediaan page 1
        And user fill available location field
        And user fill available address field
        And user click Cek Ketersediaan button 1
        When page is loading 1
        Then available pop-up will be appared in page

    @failed
    Scenario: Service unavailable location (City exist, address not)
        Given user browse Cek Ketersediaan page 2
        And user fill available location field 1
        And user fill unavailable address field 1
        And user click Cek Ketersediaan button 2
        When page is loading 2
        Then unavailable pop-up will be appared in page 1
    
    @failed
    Scenario: Service unavailable location (City not, address not)
        Given user browse Cek Ketersediaan page 3
        And user fill unavailable location field 2
        And user fill unavailable address field 2
        And user click Cek Ketersediaan button 3
        When page is loading 3
        Then unavailable pop-up will be appared in page 2



