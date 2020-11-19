/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-toolbar'));

describe('Angular Toolbar Sanity', () => {
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
        Helper.getAndWait(Helper.anglrUrl + 'toolbar/default', Helper.toolbar);
        browser.sleep(3000);
        await element(By.css('.e-toolbar')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Toolbar_angu/default_4');
        done();
    });
    it('Popup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'toolbar/popup', Helper.toolbar);
        browser.sleep(3000);
        await element(By.css('.e-toolbar')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Toolbar_angu/popup');
        done();
    });
    it('Alignment', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'toolbar/alignment', Helper.toolbar);
        browser.sleep(3000);
        await element(By.css('.e-toolbar')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Toolbar_angu/alignment');
        done();
    });
});
