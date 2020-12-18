module.exports = {
    url: 'https://indihome.co.id/berlangganan-baru/cek-ketersediaan',

    elements: {
        fillLocation: by.xpath("//div[@class='search-fea-desktop']//input[@id='searchAddress']")
    },

    performFill: function () {
        var selector = page.fillLocation.elements.fillLocation;
        return driver.findElement(selector).sendKeys(shared.location.available);
    },

    performFill2: function () {
        var selector = page.fillLocation.elements.fillLocation;
        return driver.findElement(selector).sendKeys(shared.location.available2);
    },

    performFill3: function () {
        var selector = page.fillLocation.elements.fillLocation;
        return driver.findElement(selector).sendKeys(shared.location.unavailable);
    }
}