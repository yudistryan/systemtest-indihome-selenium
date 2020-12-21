module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        clickRegisterButton: by.xpath("//button[normalize-space()='Register']")
    },

    performClick: function () {

        var selector = page.clickRegisterButton.elements.clickRegisterButton;
        return driver.findElement(selector).click(selector);
    }
};
