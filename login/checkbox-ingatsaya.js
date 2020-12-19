module.exports = {
    
    url: 'https://indihome.co.id/',

    elements: {
        checkboxIngatSaya: by.id('checkbox')
    },

    perform: function () {

        var selector = page.checkboxIngatSaya.elements.checkboxIngatSaya;
        return driver.findElement(selector).click();
    }

};