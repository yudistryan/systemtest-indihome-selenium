module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        selectJenisKelaminWanita: by.xpath("//div[@class='item']"),
    },

    performClick: function () {

        var selector = page.selectJenisKelaminWanita.elements.selectJenisKelaminWanita;
        return driver.findElement(selector).click(selector);
    }
    
};
