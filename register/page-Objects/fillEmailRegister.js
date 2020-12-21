module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillEmailRegister: by.xpath("//input[@placeholder='Email']")
    },

    performFill: function () {

        var selector = page.fillEmailRegister.elements.fillEmailRegister;
        return driver.findElement(selector).sendKeys(shared.id.email);
    }
};
