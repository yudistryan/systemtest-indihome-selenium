module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillKonfirmasiPassword: by.xpath("//input[@placeholder='Konfirmasi Password']")
    },

    performFill: function () {

        var selector = page.fillKonfirmasiPassword.elements.fillKonfirmasiPassword;
        return driver.findElement(selector).sendKeys(shared.id.konfirmasipassword);
    }
};
