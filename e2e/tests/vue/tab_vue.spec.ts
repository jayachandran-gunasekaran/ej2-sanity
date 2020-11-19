/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';

let elementFinder: ElementFinder = element(By.css('.e-sample-resize-container'));
const sleepTime: number = 1000;
    describe('Vue Tabs Sanity', () => {
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
        Helper.getAndWait(Helper.vueUrl + 'tab/default.html', Helper.tab);
        await element(By.xpath('//*[@id="e-content-sb-content_0"]/div/div/div')).isPresent().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(sleepTime);
        browser.compareScreen(element(Helper.tab), 'Default');
        done();
    });
        it('Orientation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'tab/orientation.html', Helper.tab);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(elementFinder, 'Tabvue/orientation');
        done();
    });
        it('Responisve', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'tab/responsive.html', Helper.tab);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('content-wrapper')), 'Tabvue/reponsive');
        done();
    });
        it('Wizard', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'tab/wizard.html', Helper.tab);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('content-wrapper')), 'Tabvue/Wizard');
        done();
    });

});
