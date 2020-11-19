/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-accordion'));

    describe('Vue Accordion Sanity', () => {
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
        Helper.getAndWait(Helper.vueUrl + 'accordion/default.html', Helper.accordion);
        browser.sleep(6000);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(6000);
        browser.compareScreen(element(By.className('accordion-control-wrapper')), 'Accordionvue/Default_2');
        done();
    });
    it('Ajax-content', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'accordion/ajax.html', Helper.accordion);
        browser.sleep(6000);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(6000);
        browser.compareScreen(elementFinder, 'Accordionvue/ajax');
        done();
    });
    it('Icons', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'accordion/icons.html', Helper.accordion);
        browser.sleep(6000);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(6000);
        browser.compareScreen(element(By.className('accordion-control-wrapper')), 'Accordionvue/icons');
        done();
    });
});