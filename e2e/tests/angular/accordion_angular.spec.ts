/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-accordion'));

describe('Angualr Accordion Sanity', () => {
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
        Helper.getAndWait(Helper.anglrUrl + 'accordion/default', Helper.accordion);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Accordion_angu/Default_2');
        done();
    });
    it('Ajax-content', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'accordion/ajax', Helper.accordion);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Accordion_angu/ajax');
        done();
    });
    it('Icons', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'accordion/icon', Helper.accordion);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Accordion_angu/icons');
        done();
    });
});