module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillNomorRegister: by.xpath("//input[@placeholder='Nomor HP']")
    },

    performFill: function () {

        var selector = page.fillNomorRegister.elements.fillNomorRegister;
        return driver.findElement(selector).sendKeys(shared.id.nomor);
    }
};
