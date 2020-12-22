module.exports = {
    
    url: 'https://indihome.co.id/',

    elements: {
        fieldEmail: by.name('msisdn')
    },

    performFill: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email);
    },

    performFill1: function () {

        var selector = page.fieldEmail.elements.fieldEmail;
        return driver.findElement(selector).sendKeys(shared.id.email1);
    }
}