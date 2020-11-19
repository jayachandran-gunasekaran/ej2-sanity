/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-card'));

describe('Angular Cards Sanity', () => {
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
    it('Basic-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'card/basic', Helper.card);
        browser.sleep(1000);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsangu/Basic');
        done();
    });
    it('Vertical-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'card/vertical', Helper.card);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsangu/vertical');
        done();
    });
    it('Horizontal-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'card/horizontal', Helper.card);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsangu/horizontal');
        done();
    });
    it('Swipeable-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'card/swipeable', Helper.card);
        browser.sleep(2000);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Cardsangu/swipeable');
        //await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
        //   expect(flag).toEqual(true);
        done();
    });
    it('Flip-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'card/flip', Helper.card);
        browser.sleep(1000);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        //browser.sleep(1000);
        browser.compareScreen(elementFinder, 'Cardsangu/flip');
        done();
    });
    it('Reveal-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'card/reveal', Helper.card);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cardsangu/reveal');
        done();
    });
    it('Tile-view', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'card/tile', Helper.card);
        browser.sleep(1000);

        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
            browser.sleep(1000);
        });
        browser.sleep(2000);
        browser.compareScreen(element(By.className('container-fluid')), 'Cardsangu/tile');
        done();
    });
});