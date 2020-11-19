/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.container-fluid'));

describe('Vue Cards Sanity', () => {
    afterEach((done: DoneFn) => {
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        browser.manage().logs().get('browser').then((browserLog: any) => {​​​​​​​​// tslint:disable-line:no-any
            if (browserLog.length) {
                fail(browserLog);
            }
        });
        done();
    });
    it('Basic-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'card/basic.html', Helper.card);
        browser.sleep(1000);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsvue/Basic');
        done();
    });
    it('Vertical-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'card/vertical.html', Helper.card);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsvue/vertical');
        done();
    });
    it('Horizontal-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'card/horizontal.html', Helper.card);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsvue/horizontal');
        done();
    });
    it('Swipeable-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'card/swipeable.html', Helper.card);
        browser.sleep(2000);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Cardsvue/swipeable');
        //await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
        //   expect(flag).toEqual(true);
        done();
    });
    it('Flip-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'card/flip.html', Helper.card);
        browser.sleep(1000);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        //browser.sleep(1000);
        browser.compareScreen(elementFinder, 'Cardsvue/flip');
        done();
    });
    it('Reveal-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'card/reveal.html', Helper.card);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsvue/reveal');
        done();
    });
    it('Tile-view', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'card/tile.html', Helper.card);
        browser.sleep(1000);

        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
            browser.sleep(1000);
        });
        browser.sleep(2000);
        browser.compareScreen(element(By.className('container-fluid')), 'Cardsvue/tile');
        done();
    });
});