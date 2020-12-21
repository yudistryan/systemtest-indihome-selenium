module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillNomorRegistered: by.xpath("//input[@placeholder='Nomor HP']")
    },

    performFill: function () {

        var selector = page.fillNomorRegistered.elements.fillNomorRegistered;
        return driver.findElement(selector).sendKeys(shared.id.nomorregistered);
    }
};
