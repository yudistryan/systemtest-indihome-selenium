module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillNamaRegister: by.xpath("//input[@placeholder='Nama']")
    },

    performFill: function () {

        var selector = page.fillNamaRegister.elements.fillNamaRegister;
        return driver.findElement(selector).sendKeys(shared.id.nama);
    }
};
