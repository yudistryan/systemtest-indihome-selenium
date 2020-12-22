module.exports = function () {
this.Given(/^user browse indihome1$/, function () {
    helpers.loadPage('https://indihome.co.id')
});

this.Given(/^user click button masuk1$/, function () {
    driver.then(function () {
        return page.buttonMasuk.perform();
            })
    driver.quit()
  });

  this.Given(/^user fill email atau nomor hp field with wrong data$/, function () {
    driver.then(function () {
        return page.fieldEmail.performFill1();
    })
    driver.quit()
  });

  this.Given(/^user click checkbox ingat saya1$/, function () {
    driver.then(function () {
        return page.checkboxIngatSaya.perform();
            })
            driver.quit()
  });

  this.When(/^user click button login1$/, function () {
    driver.then(function () {
        return page.buttonLogin.perform();
            })
            driver.quit()
  });

  this.Then(/^user get alert belum terdaftar$/, function () {
    driver.then(function () {
        return page.alertError.perform();
            })
            driver.quit()
  });
}