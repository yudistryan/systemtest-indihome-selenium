module.exports = function () {
    // scenario 1
    this.Given(/^user browse Cek Ketersediaan page 1$/, function () {
        helpers.loadPage(shared.page.cek)
    });
    
    this.Given(/^user fill available location field$/, function () {
        driver.then(function(){
            return page.fillLocation.performFill();
        })
    });
    
    this.Given(/^user fill available address field$/, function () {
        driver.then(function(){
            return page.fillAddress.performFill();
        })
    });

    this.Given(/^user click Cek Ketersediaan button 1$/, function () {
        driver.then(function(){
            return page.cekBtn.performClick();
        })
    });
    
    this.When(/^page is loading 1$/, function () {
        return driver.findElements(by.xpath(shared.element.loading))
            .then(function(elements){
                expect(elements.length).to.equal(1);
            })
    });
    
    this.Then(/^available pop\-up will be appared in page$/, function () {
        return driver.wait(until.elementsLocated(by.xpath(shared.element.available)), 20000).then(function(){
            return driver.findElements(by.xpath(shared.element.available))
        })    
                .then(function(elements){
                    expect(elements.length).to.equal(1);
                })
    });




    // scenario 2
    this.Given(/^user browse Cek Ketersediaan page 2$/, function () {
        helpers.loadPage(shared.page.cek)
    });
    
    this.Given(/^user fill available location field 1$/, function () {
        driver.then(function(){
            return page.fillLocation.performFill2();
        })
    });
    
    this.Given(/^user fill unavailable address field 1$/, function () {
        driver.then(function(){
            return page.fillAddress.performFill2();
        })
    });

    this.Given(/^user click Cek Ketersediaan button 2$/, function () {
        driver.then(function(){
            return page.cekBtn.performClick();
        })
    });
    
    this.When(/^page is loading 2$/, function () {
        return driver.findElements(by.xpath(shared.element.loading))
            .then(function(elements){
                expect(elements.length).to.equal(1);
            })
    });
    
    this.Then(/^unavailable pop\-up will be appared in page 1$/, function () {
        return driver.wait(until.elementsLocated(by.xpath(shared.element.unavailable)), 20000).then(function(){
            return driver.findElements(by.xpath(shared.element.unavailable))
        })    
                .then(function(elements){
                    expect(elements.length).to.equal(1);
                })
    });



    // scenario 3
    this.Given(/^user browse Cek Ketersediaan page 3$/, function () {
        helpers.loadPage(shared.page.cek)
    });
    
    this.Given(/^user fill unavailable location field 2$/, function () {
        driver.then(function(){
            return page.fillLocation.performFill3();
        })
    });
    
    this.Given(/^user fill unavailable address field 2$/, function () {
        driver.then(function(){
            return page.fillAddress.performFill2();
        })
    });

    this.Given(/^user click Cek Ketersediaan button 3$/, function () {
        driver.then(function(){
            return page.cekBtn.performClick();
        })
    });
    
    this.When(/^page is loading 3$/, function () {
        return driver.findElements(by.xpath(shared.element.loading))
            .then(function(elements){
                expect(elements.length).to.equal(1);
            })
    });
    
    this.Then(/^unavailable pop\-up will be appared in page 2$/, function () {
        return driver.wait(until.elementsLocated(by.xpath(shared.element.unavailable)), 20000).then(function(){
            return driver.findElements(by.xpath(shared.element.unavailable))
        })    
                .then(function(elements){
                    expect(elements.length).to.equal(1);
                })
    });


    

    
    

}