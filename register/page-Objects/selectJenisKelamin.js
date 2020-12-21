module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        selectJenisKelamin: by.xpath("//div[@role='listbox']"),
    },

    performClick: function () {

        var selector = page.selectJenisKelamin.elements.selectJenisKelamin;
        return driver.findElement(selector).click(selector);
    }
    
};
