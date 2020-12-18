module.exports = {
    url: 'https://indihome.co.id/berlangganan-baru/cek-ketersediaan',

    elements: {
        fillAddress: by.xpath("//*[@id='__next']/div/div[4]/div[2]/div/div[8]/div[2]/div/div/div[4]/div/div/div[3]/div/div/div/div[2]/div/input")
    },

    performFill: function () {
        var selector = page.fillAddress.elements.fillAddress;
        return driver.findElement(selector).sendKeys(shared.address.available);
    },
    
    performFill2: function () {
        var selector = page.fillAddress.elements.fillAddress;
        return driver.findElement(selector).sendKeys(shared.address.unavailable);
    }
}