import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-accordion'));

    describe('Typescript Accordion Sanity', () => {
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
        Helper.getAndWait(Helper.baseUrl + 'accordion/default.html', Helper.accordion);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(elementFinder, 'Accordion/Default_2');
        done();
    });
    it('Ajax-content', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'accordion/ajax.html', Helper.accordion);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(elementFinder, 'Accordion/ajax');
        done();
    });
    it('Icons', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'accordion/icon.html', Helper.accordion);
        await element(By.css('.e-accordion')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(elementFinder, 'Accordion/icons');
        done();
    });
});