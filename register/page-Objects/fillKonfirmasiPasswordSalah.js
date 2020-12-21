module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillKonfirmasiPasswordSalah: by.xpath("//input[@placeholder='Konfirmasi Password']")
    },

    performFill: function () {

        var selector = page.fillKonfirmasiPasswordSalah.elements.fillKonfirmasiPasswordSalah;
        return driver.findElement(selector).sendKeys(shared.id.konfirmasipasswordsalah);
    }
};
