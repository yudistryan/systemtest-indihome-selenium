module.exports = function () {
    this.Given(/^user browse indihome$/, function () {
        helpers.loadPage('https://indihome.co.id')
    });

    this.Given(/^user click button masuk$/, function () {
        driver.then(function () {
            return page.buttonMasuk.perform();
                })
                driver.quit()
      });

      this.Given(/^user fill email atau nomor hp field with true data$/, function () {
        driver.then(function () {
            return page.fieldEmail.performFill();
        })
        driver.quit()
      });

      this.Given(/^user click checkbox ingat saya$/, function () {
        driver.then(function () {
            return page.checkboxIngatSaya.perform();
                })
                driver.quit()
      });

      this.When(/^user click button login$/, function () {
        driver.then(function () {
            return page.buttonLogin.perform();
                })
                driver.quit()
      });

      this.Then(/^user get pop up verifikasi akun$/, function () {
        driver.then(function () {
            return page.popupVerifikasi.perform();
                })
                driver.quit()
      });

      
}
