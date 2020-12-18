module.exports = {
    url: 'https://indihome.co.id/berlangganan-baru/cek-ketersediaan',

    elements: {
        cekBtn: by.xpath("//*[@id='feasibility_submit']")
    },

    performClick: function () {
        var selector = page.cekBtn.elements.cekBtn;
        return driver.findElement(selector).click();
    }
}