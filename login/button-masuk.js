module.exports = {
    
    url: 'https://indihome.co.id/',

    elements: {
        buttonMasuk: by.name('submit') 
    },

    perform: function () {

        var selector = page.buttonMasuk.elements.buttonMasuk;
        return driver.findElement(selector).click();
    }

};