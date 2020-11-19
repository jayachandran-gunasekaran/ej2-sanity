/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-kanban-content'));

describe('Vue Kanban Sanity', () => {
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
        Helper.getAndWait(Helper.tsUrl + 'kanban/overview.html', Helper.kanban);
        browser.sleep(3000);
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
        Helper.getAndWait(Helper.vueUrl + 'kanban/default.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/Default_5');
        done();
    });
    it('Swimlane', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/swimlane.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/swimlane');
        done();
    });
    it('Stacked-header', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/stacked-header.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/stackedheader');
        done();
    });
    it('Dialog-edit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/dialog-editing.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/dialogedit');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/search-filter.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/search');
        done();
    });
    it('Sorting', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/sorting.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/sorting');
        done();
    });
    it('Local-data', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/local-data.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/local');
        done();
    });
    it('Remote', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/remote-data.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/remote');
        done();
    });
    it('header-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/header-template.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/headertemplate');
        done();
    });
    it('Swimlane-template', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/swimlane-template.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/swimlanetemplate');
        done();
    });
    it('Card-templte', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/card-template.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/cardtemplate');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/tooltip-template.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanbanvue/tooltip');
        done();
    });
    it('Toggle', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/toggle-columns.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'kanbanvue/toggle');
        done();
    });
    it('Show-hide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/show-hide.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/showhide');
        done();
    });
    it('Wip-validation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/wip-validation.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/wip');
        done();
    });
    it('Api', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/api.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/api');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'kanban/events.html', Helper.kanban);
        browser.sleep(3000);
        await element(By.css('.e-kanban-content')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Kanbanvue/events_3');
        done();
    });
});