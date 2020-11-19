/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-tab'));

describe('Angular Tabs Sanity', () => {
    afterEach((done: DoneFn) => {
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        browser.manage().logs().get('browser').then((browserLog: any) => {// tslint:disable-line:no-any
            if (browserLog.length) {
                // tslint:disable-next-line:no-console
                console.log('\x1b[31m', JSON.stringify(browserLog));
            }
        });
        done();
    });
    it('Default', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'tab/default', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabangu/Default_3');
        done();
    });
    it('Orientation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'tab/orientation', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabangu/orientation');
        done();
    });
    it('Responisve', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'tab/responsive-modes', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabangu/reponsive');
        done();
    });
    it('Wizard', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'tab/wizard', Helper.tab);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabangu/Wizard');
        done();
    });

});
