module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillNamaRegistered: by.xpath("//input[@placeholder='Nama']")
    },

    performFill: function () {

        var selector = page.fillNamaRegistered.elements.fillNamaRegistered;
        return driver.findElement(selector).sendKeys(shared.id.namaregistered);
    }
};
