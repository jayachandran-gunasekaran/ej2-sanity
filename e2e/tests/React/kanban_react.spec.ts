/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-kanban-content'));

describe('React Kanban Sanity', () => {
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
        Helper.getAndWait(Helper.reactUrl + 'kanban/overview', Helper.kanban);
        browser.sleep(2000);
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
        Helper.getAndWait(Helper.reactUrl + 'kanban/default', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/Default_5react');
        done();
    });
    it('Swimlane', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/swimlane', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanangu/swimlanereact');
        done();
    });
    it('Stacked-header', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/stacked-header', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/stackedheaderreact');
        done();
    });
    it('Dialog-edit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/dialog-editing', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/dialogeditreact');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/search-filter', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/searchreact');
        done();
    });
    it('Sorting', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/sorting', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/sortingreact');
        done();
    });
    it('Local-data', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/local-data', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/localreact');
        done();
    });
    it('Remote', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/remote-data', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/remotereact');
        done();
    });
    it('header-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/header-template', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/headertemplatereact');
        done();
    });
    it('Swimlane-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/swimlane-template', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/swimlanetemplatereact');
        done();
    });
    it('Card-templte', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/card-template', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/cardtemplatereact');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/tooltip-template', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanbanreact/tooltipreact');
        done();
    });
    it('Toggle', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/toggle-columns', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanbanreact/togglereact');
        done();
    });
    it('Show-hide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/show-hide', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/showhidereact');
        done();
    });
    it('Wip-validation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/wip-validation', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/wipreact');
        done();
    });
    it('Api', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/api', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/apireact');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'kanban/events', Helper.kanban);
        browser.sleep(2000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanreact/events_3react');
        done();
    });
});