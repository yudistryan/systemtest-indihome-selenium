module.exports = function () {
    //scenario 1
    this.Given(/^user browse indihome page$/, function () {
        helpers.loadPage('https://indihome.co.id/');
    });

    this.Then(/^user click daftar akun$/, function () {
         driver.then(function () {
            return page.clickDaftarAkun.performClick();
        })
    });

    this.Then(/^fill Email field$/, function () {
        driver.then(function () {
           return page.fillEmailRegister.performFill();
       })
       });

     this.Then(/^fill Nama field$/, function () {
         driver.then(function () {
            return page.fillNamaRegister.performFill();
        })
        });

    this.Then(/^fill Nomor HP$/, function () {
        driver.then(function () {
            return page.fillNomorRegister.performFill();
        })
        });

    this.Then(/^select Jenis Kelamin$/, function () {
        driver.then(function () {
            return page.selectJenisKelamin.performClick();
        })
        });

    this.Then(/^select Jenis Kelamin Wanita$/, function () {
        driver.then(function () {
            return page.selectJenisKelaminWanita.performClick();
        })
        });    

    this.Then(/^fill Password$/, function () {
        driver.then(function () {
            return page.fillPasswordRegister.performFill();
        })
        });

    this.Then(/^fill Konfirmasi Password$/, function () {
        driver.then(function () {
            return page.fillKonfirmasiPassword.performFill();
        })
        });

    this.Then(/^check Setuju$/, function () {
        driver.then(function () {
            return page.checkSetuju.performClick();
        })
        });

    this.Then(/^user click Register Button$/, function () {
        driver.then(function () {
            return page.clickRegisterButton.performClick();
        })
        });

    this.When(/^page is loading$/, function () {
        return driver.findElements(by.xpath(shared.element.loading))
            .then(function(elements){
                expect(elements.length).to.equal(1);
        })
        });

        this.Then(/^verify alert will be appeared$/, function () {
            return driver.findElements(by.xpath(shared.element.loading))
            .then(function(elements){
                expect(elements.length).to.equal(1);
        })
        });

    //scenario 2: nomor hp already registered

    this.Then(/^fill Email Registered field$/, function () {
        driver.then(function () {
           return page.fillEmailRegistered.performFill();
       })
       });

       this.Then(/^fill Nama Registered field$/, function () {
        driver.then(function () {
           return page.fillNamaRegister.performFill();
       })
       });

    this.Then(/^fill Nomor HP Registered$/, function () {
        driver.then(function () {
            return page.fillNomorRegistered.performFill();
        })
        });

    this.Then(/^failed alert will be appeared 1$/, function () {
            return driver.wait(until.elementsLocated(by.xpath(shared.element.failed)), 20000).then(function(){
                return driver.findElements(by.xpath(shared.element.failed))
                })    
                    .then(function(elements){
                        expect(elements.length).to.equal(1);
                    })
            });

    //scenario 3: skip step check setuju 
    
    this.Then(/^failed alert will be appeared 2$/, function () {
        return driver.wait(until.elementsLocated(by.xpath(shared.element.failed)), 20000).then(function(){
            return driver.findElements(by.xpath(shared.element.failed))
            })    
                .then(function(elements){
                    expect(elements.length).to.equal(1);
                })
        });

    //scenario 4: fill konfirmasi password salah
    this.When(/^user fill Konfirmasi Password Salah$/, function () {
        driver.then(function () {
            return page.fillKonfirmasiPasswordSalah.performFill();
        })
        });

    this.Then(/^user see element konfirmasi password tidak sama$/, function () {
    return driver.wait(until.elementsLocated(by.xpath(shared.element.unmatch)), 20000).then(function(){
        return driver.findElements(by.xpath(shared.element.unmatch))
        })    
            .then(function(elements){
                expect(elements.length).to.equal(1);
            })
    });


}
