/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.id('control-content'));



describe('Vue Toolbar Sanity', () => {
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
        Helper.getAndWait(Helper.vueUrl + 'toolbar/default.html', Helper.toolbar);
        browser.sleep(3000);
        await element(By.xpath('//*[@id="control-content"]/div/div')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Toolbarvue/default_10');
        done();
    });
    it('Popup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'toolbar/popup.html', Helper.toolbar);
        browser.sleep(3000);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Toolbarvue/popup_11');
        done();
    });
    it('Alignment', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'toolbar/alignment.html', Helper.toolbar);
        browser.sleep(3000);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Toolbarvue/alignment_12');
        done();
    });
});
