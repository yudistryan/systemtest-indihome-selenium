module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        checkSetuju: by.xpath("//label[@for='checkbox']")
    },

    performClick: function () {

        var selector = page.checkSetuju.elements.checkSetuju;
        return driver.findElement(selector).click(selector);
    }
};
