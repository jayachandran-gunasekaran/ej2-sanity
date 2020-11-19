/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-tab'));

describe('React Tabs Sanity', () => {
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
        Helper.getAndWait(Helper.reactUrl + 'tab/default', Helper.tab);
        browser.sleep(1000);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabreact/Default_3react');
        done();
    });
    it('Orientation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'tab/orientation', Helper.tab);
        browser.sleep(1000);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabreact/orientationreact');
        done();
    });
    it('Responisve', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'tab/responsive-modes', Helper.tab);
        browser.sleep(1000);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabreact/reponsivereact');
        done();
    });
    it('Wizard', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'tab/wizard', Helper.tab);
        browser.sleep(1000);
        await element(By.css('.e-tab')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Tabreact/Wizardreact');
        done();
    });

});
