module.exports = {
    
    url: 'https://indihome.co.id/',

    elements: {
        alertError: by.xpath('/html/body/div[2]/div/div[1]/div/div/div/div[2]/div[2]')
    },

    perform: function () {

        var selector = page.alertError.elements.alertError;
        return driver.findElement(selector);
    }

};