import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-kanban-content'));

    describe('Typescript Kanban Sanity', () => {
        afterEach((done: DoneFn) => {
        // tslint:disable-next-line:no-backbone-get-set-outside-model
        browser.manage().logs().get('browser').then((browserLog: any) => {​​​​​​​​// tslint:disable-line:no-any
            if (browserLog.length) {
                fail(browserLog);
            }
        });
        done();
    });
    it('Overview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/overview.html', Helper.kanban);
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
        Helper.getAndWait(Helper.baseUrl + 'kanban/default.html', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/Default_5');
        done();
    });
    it('Swimlane', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/swimlane.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/swimlane');
        done();
    });
    it('Stacked-header', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/stacked-header.html', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/stackedheader');
        done();
    });
    it('Dialog-edit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/dialog-editing.html', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/dialogedit');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/search-filter.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/search');
        done();
    });
    it('Sorting', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/sorting.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/sorting');
        done();
    });
    it('Local-data', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/local-data.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/local');
        done();
    });
    it('Remote', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/remote-data.html', Helper.kanban1);
        browser.sleep(1000);
        await element(By.css('.e-kanban')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/remote');
        done();
    });
    it('header-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/header-template.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/headertemplate');
        done();
    });
    it('Swimlane-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/swimlane-template.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/swimlanetemplate');
        done();
    });
    it('Card-templte', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/card-template.html', Helper.kanban);
        browser.sleep(1000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/cardtemplate');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/tooltip-template.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanban/tooltip');
        done();
    });
    it('Toggle', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/toggle-columns.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanban/toggle');
        done();
    });
    it('Show-hide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/show-hide.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/showhide');
        done();
    });
    it('Wip-validation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/wip-validation.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/wip');
        done();
    });
    it('Api', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/api.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/api');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'kanban/events.html', Helper.kanban);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.compareScreen(element(By.className('container-fluid')), 'Kanban/events_3');
        done();
    });
});