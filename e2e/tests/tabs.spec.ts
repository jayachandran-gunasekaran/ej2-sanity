import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-tab'));

    fdescribe('Typescript Tabs Sanity', () => {
        afterEach((done: DoneFn) => {
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        browser.manage().logs().get('browser').then((browserLog: any) => {​​​​​​​​// tslint:disable-line:no-any
            if (browserLog.length) {
                fail(browserLog);
            }
        });
        done();
    });
    it('Default', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'tab/default.html', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tab/Default_3');
        done();
    });
    it('Orientation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'tab/orientation.html', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tab/orientation');
        done();
    });
    it('Responisve', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'tab/responsive-modes.html', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tab/reponsive');
        done();
    });
    it('Wizard', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'tab/wizard.html', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tab/Wizard');
        done();
    });

});
