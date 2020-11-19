
/**
 * Test case
 */import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-schedule'));

fdescribe('Angular Schedule Sanity', () => {
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
        Helper.getAndWait(Helper.anglrUrl + 'schedule/default', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);

        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/Default_1');
        done();
    });
    it('Localdata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/local-data', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);

        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/local_1');
        done();
    });
    it('Remotedata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/remote-data', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/remote');
        done();
    });
    it('Syncgooglecalendar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/calendar-integration', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/sync');
        done();
    });
    it('Recurringevents', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/recurrence-events', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);

        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/recurre_1');
        done();
    });
    it('Blockevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/block-events', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/block');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/search-events', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/searchevent_1');
        done();
    });
    it('Timezone', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/timezone', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/timezone');
        done();
    });

    it('Dragdrop', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/external-drag-drop', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/dragdrop_1');
        done();
    });
    it('Inline-editor', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/inline-editing', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/inline_1');
        done();
    });
    it('Virtual-scroll', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/virtual-scrolling', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        await element(By.css('.e-table-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        done();
    });
    it('Basicview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/views', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/basicview_1');
        done();
    });
    it('Timelineview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/timeline', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/timeline_1');
        done();
    });
    it('Agendaview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/agenda', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        await element(By.css('.e-content-table')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        done();
    });
    it('Monthagendaview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/month-agenda', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/monthagenda_1');
        done();
    });
    it('Yearview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/year', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        await element(By.css('.e-content-table')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        done();
    });
    it('Individualview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/views-configuration', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/individual_1');
        done();
    });
    it('Viewinterval', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/extended-views', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/viewinterval_1');
        done();
    });
    it('Roomscheduler', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/timeline-resources', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/roomscheduler_1');
        done();
    });
    it('Farecal', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/resources', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        await element(By.css('.e-content-table')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        done();
    });
    it('Resources', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/resource', Helper.schedule);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/resources_1');
        done();
    });
    it('Sharedevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/group-editing', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/sharedevent_1');
        done();
    });
    it('Differentworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/group-custom-work-days', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/differentwork_1');
        done();
    });
    it('Showandhide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/add-remove-resources', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/showandhide_1');
        done();
    });
    it('Rowautoheight', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/adaptive-rows', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/rowauto_1');
        done();
    });
    it('Horizontalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/resource-grouping', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/horizontalgroup');
        done();
    });
    it('Timelinegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/timeline-resource-grouping', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/timelinegroup_1');
        done();
    });
    it('Datewisegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/group-by-date', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/datewise_1');
        done();
    });
    it('Hierarchicalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/group-by-child', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/hierarchical_1');
        done();
    });
    it('Cell', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/cell-template', Helper.schedule);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/cell_1');
        done();
    });
    it('Dateheader', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/date-header-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/dateheader_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/event-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/events_1');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/tooltip', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/tooltip_1');
        done();
    });
    it('Quickinfo', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/quick-info-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/quickinfo_1');
        done();
    });
    it('Fieldvalidation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/editor-validation', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/fieldvalidation_1');
        done();
    });
    it('Additionalfield', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/editor-custom-field', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/additionalfield_1');
        done();
    });
    it('Editortemplate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/editor-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/editortemplate_1');
        done();
    });
    it('Header-rows', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/header-rows', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/headerrow_1');
        done();
    });
    it('Time-scale', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/time-scale', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/timescale_1');
        done();
    });
    it('Context-menu', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/context-menu', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/contextmenu_1');
        done();
    });
    it('Header-bar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/header-bar', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/headerbar_1');
        done();
    });
    it('Scroll-time', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/scroll-to', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/scrolltime_1');
        done();
    });
    it('Work-days', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/work-days', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/workdays_1');
        done();
    });
    it('Hide-nonworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/hide-weekend', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/hidenonwork_1');
        done();
    });
    it('Work-hour', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/work-hour', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/workhour_1');
        done();
    });
    it('Day-hourlimit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/start-end-hour', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/dayhourlimit_1');
        done();
    });
    it('Cell-dimension', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/cell-dimension', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/celldimension_1');
        done();
    });
    it('Read-onlyevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/read-only-events', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        await element(By.css('.e-content-table')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        done();
    });
    it('Excel-exporting', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/excel-export', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/excelexport_1');
        done();
    });
    it('Exportandimportics', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/calendar-export-import', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/exportandimport_1');
        done();
    });
    it('Print', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/print', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/print_1');
        done();
    });
    it('Rule-generate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/recurrence-editor-generate-rule', Helper.schedule);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);

        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('control-section')), 'Scheduleangu/rulegenerate_1');
        done();
    });
    it('Populate-rule', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/recurrence-editor-populate-rule', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('control-section')), 'Scheduleangu/populaterule_1');
        done();
    });
    it('Keyboard-intercation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/keyboard-interaction', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/Keyboardinteraction_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.anglrUrl + 'schedule/events', Helper.schedule);
        await element(By.css('.content-wrapper')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Scheduleangu/events_2');
        done();
    });

});