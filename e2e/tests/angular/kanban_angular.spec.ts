/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-kanban-content'));

describe('Angular Kanban Sanity', () => {
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
    it('Overview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/overview', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        await element(By.css('.e-content-table')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        done();
    });
    it('Default', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/default', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/Default_5');
        done();
    });
    it('Swimlane', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/swimlane', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/swimlane');
        done();
    });
    it('Stacked-header', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/stacked-header', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/stackedheader');
        done();
    });
    it('Dialog-edit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/dialog-editing', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/dialogedit');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/search-filter', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/search');
        done();
    });
    it('Sorting', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/sorting', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/sorting');
        done();
    });
    it('Local-data', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/local-data', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/local');
        done();
    });
    it('Remote', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/remote-data', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/remote');
        done();
    });
    it('header-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/header-template', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/headertemplate');
        done();
    });
    it('Swimlane-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/swimlane-template', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/swimlanetemplate');
        done();
    });
    it('Card-templte', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/card-template', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/cardtemplate');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/tooltip-template', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanbanangu/tooltip');
        done();
    });
    it('Toggle', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/toggle-columns', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanbanangu/toggle');
        done();
    });
    it('Show-hide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/show-hide', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/showhide');
        done();
    });
    it('Wip-validation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/wip-validation', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/wip');
        done();
    });
    it('Api', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/api', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/api');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'kanban/events', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/events_3');
        done();
    });
});