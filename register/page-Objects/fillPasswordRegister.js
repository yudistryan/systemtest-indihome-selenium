module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillPasswordRegister: by.xpath("//input[@placeholder='Password']")
    },

    performFill: function () {

        var selector = page.fillPasswordRegister.elements.fillPasswordRegister;
        return driver.findElement(selector).sendKeys(shared.id.password);
    }
};
