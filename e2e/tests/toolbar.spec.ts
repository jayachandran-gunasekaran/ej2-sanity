import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
let elementFinder: ElementFinder = element(By.className('.e-sample-resize-container'));

    describe('Typescript Toolbar Sanity', () => {
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
        Helper.getAndWait(Helper.baseUrl + 'toolbar/default.html', Helper.toolbar);
        browser.sleep(3000);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('control-wrapper')),'Toolbar/default_4');
        done();
    });
    it('Popup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'toolbar/popup.html', Helper.toolbar);
        browser.sleep(1000);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('control-wrapper')), 'Toolbar/popup');
        done();
    });
    it('Alignment', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'toolbar/alignment.html', Helper.toolbar);
        browser.sleep(1000);
        await element(By.css('.e-sample-resize-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('control-wrapper')), 'Toolbar/alignment');
        done();
    });
});
