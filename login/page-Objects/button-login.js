module.exports = {
    
    url: 'https://indihome.co.id/',

    elements: {
        buttonLogin: by.xpath('/html/body/div[2]/div/div[1]/div/div/div/div[2]/button')
    },

    perform: function () {

        var selector = page.buttonLogin.elements.buttonLogin;
        return driver.findElement(selector).click();
    }

};