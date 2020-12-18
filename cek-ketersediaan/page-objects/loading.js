module.exports = {
    url: 'https://indihome.co.id/berlangganan-baru/cek-ketersediaan',

    elements: {
        loadPage: by.xpath("/html/body/div[3]/div/div[1]/div/div/div/center/div")
    },

    performWait: function () {
        var selector = page.loading.elements.loadPage;
        return selector;
    }
}