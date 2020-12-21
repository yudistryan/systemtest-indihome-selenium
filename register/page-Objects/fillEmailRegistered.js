module.exports = {

    url: 'https://indihome.co.id/',

    elements: {
        fillEmailRegistered: by.xpath("//input[@placeholder='Email']")
    },

    performFill: function () {

        var selector = page.fillEmailRegistered.elements.fillEmailRegistered;
        return driver.findElement(selector).sendKeys(shared.id.emailregistered);
    }
};
