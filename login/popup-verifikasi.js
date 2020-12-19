module.exports = {
    
    url: 'https://indihome.co.id/',

    elements: {
        popupVerifikasi: by.xpath('/html/body/div[2]/div/div[1]/div/div')
    },

    perform: function () {

        var selector = page.popupVerifikasi.elements.popupVerifikasi;
        return driver.findElement(selector);
    }

};