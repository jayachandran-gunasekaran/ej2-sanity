import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-card'));

    describe('Typescript Cars Sanity', () => {
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
        Helper.getAndWait(Helper.baseUrl + 'card/basic.html', Helper.card);
        browser.sleep(1000);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cards/Basic');
        done();
    });
    it('Vertical-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'card/vertical.html', Helper.card);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cards/vertical');
        done();
    });
    it('Horizontal-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'card/horizontal.html', Helper.card);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cards/horizontal');
        done();
    });
    it('Swipeable-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'card/swipeable.html', Helper.card);
        browser.sleep(2000);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Cards/swipeable');
        //await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
         //   expect(flag).toEqual(true);
        done();
    });
    it('Flip-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'card/flip.html', Helper.card);
        browser.sleep(1000);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        //browser.sleep(1000);
        browser.compareScreen(elementFinder, 'Cards/flip');
        done();
    });
    it('Reveal-card', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'card/reveal.html', Helper.card);
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(elementFinder, 'Cards/reveal');
        done();
    });
    it('Tile-view', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'card/tile.html', Helper.card);
        browser.sleep(1000);
        
        await element(By.css('.e-card')).isDisplayed().then((flag: boolean) => {
        expect(flag).toEqual(true);
        browser.sleep(1000);
        });
        browser.sleep(2000);
        browser.compareScreen(element(By.className('container-fluid')), 'Cards/tile');
        done();
    });
});