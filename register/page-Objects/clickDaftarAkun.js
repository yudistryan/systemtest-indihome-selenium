module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        clickDaftarAkunButton: by.xpath("//ul[@class='ml-auto d-none d-lg-block navbar-nav']//button[1]")
    },

    performClick: function () {

        var selector = page.clickDaftarAkun.elements.clickDaftarAkunButton;
        return driver.findElement(selector).click(selector);
    }
};
