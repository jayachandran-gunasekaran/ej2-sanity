/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-schedule'));

describe('React Schedule Sanity', () => {
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
        Helper.getAndWait(Helper.reactUrl + 'schedule/overview', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);

        await element(By.css('.e-table-container')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        done();
    });

    it('Default', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/default', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);

        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/Default_1react');
        done();
    });
    it('Localdata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/local-data', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);

        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/local_1react');
        done();
    });
    it('Remotedata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/remote-data', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/remotereact');
        done();
    });
    it('Syncgooglecalendar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/calendar-integration', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/syncreact');
        done();
    });
    it('Recurringevents', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/recurrence-events', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);

        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/recurre_1react');
        done();
    });
    it('Blockevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/block-events', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/blockreact');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/search-events', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/searchevent_1');
        done();
    });
    it('Timezone', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/timezone', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/timezone');
        done();
    });

    it('Dragdrop', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/external-drag-drop', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/dragdrop_1');
        done();
    });
    it('Inline-editor', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/inline-editing', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/inline_1');
        done();
    });
    it('Virtual-scroll', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/virtual-scrolling', Helper.schedule);
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
        Helper.getAndWait(Helper.reactUrl + 'schedule/views', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/basicview_1');
        done();
    });
    it('Timelineview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/timeline', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/timeline_1');
        done();
    });
    it('Agendaview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/agenda', Helper.schedule);
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
        Helper.getAndWait(Helper.reactUrl + 'schedule/month-agenda', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/monthagenda_1');
        done();
    });
    it('Yearview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/year', Helper.schedule);
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
        Helper.getAndWait(Helper.reactUrl + 'schedule/views-configuration', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/individual_1');
        done();
    });
    it('Viewinterval', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/extended-views', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/viewinterval_1');
        done();
    });
    it('Roomscheduler', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/timeline-resources', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/roomscheduler_1');
        done();
    });
    it('Farecal', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/resources', Helper.schedule);
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
        Helper.getAndWait(Helper.reactUrl + 'schedule/resource', Helper.schedule);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/resources_1');
        done();
    });
    it('Sharedevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/group-editing', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/sharedevent_1');
        done();
    });
    it('Differentworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/group-custom-work-days', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/differentwork_1');
        done();
    });
    it('Showandhide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/add-remove-resources', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/showandhide_1');
        done();
    });
    it('Rowautoheight', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/adaptive-rows', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/rowauto_1');
        done();
    });
    it('Horizontalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/resource-grouping', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/horizontalgroup');
        done();
    });
    it('Timelinegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/timeline-resource-grouping', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/timelinegroup_1');
        done();
    });
    it('Datewisegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/group-by-date', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/datewise_1');
        done();
    });
    it('Hierarchicalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/group-by-child', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/hierarchical_1');
        done();
    });
    it('Cell', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/cell-template', Helper.schedule);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/cell_1');
        done();
    });
    it('Dateheader', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/date-header-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/dateheader_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/event-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/events_1');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/tooltip', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/tooltip_1');
        done();
    });
    it('Quickinfo', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/quick-info-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/quickinfo_1');
        done();
    });
    it('Fieldvalidation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/editor-validation', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/fieldvalidation_1');
        done();
    });
    it('Additionalfield', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/editor-custom-field', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/additionalfield_1');
        done();
    });
    it('Editortemplate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/editor-template', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/editortemplate_1');
        done();
    });
    it('Header-rows', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/header-rows', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/headerrow_1');
        done();
    });
    it('Time-scale', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/time-scale', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/timescale_1');
        done();
    });
    it('Context-menu', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/context-menu', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/contextmenu_1');
        done();
    });
    it('Header-bar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/header-bar', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/headerbar_1');
        done();
    });
    it('Scroll-time', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/scroll-to', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/scrolltime_1');
        done();
    });
    it('Work-days', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/work-days', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/workdays_1');
        done();
    });
    it('Hide-nonworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/hide-weekend', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/hidenonwork_1');
        done();
    });
    it('Work-hour', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/work-hour', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/workhour_1');
        done();
    });
    it('Day-hourlimit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/start-end-hour', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/dayhourlimit_1');
        done();
    });
    it('Cell-dimension', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/cell-dimension', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/celldimension_1');
        done();
    });
    it('Read-onlyevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/read-only-events', Helper.schedule);
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
        Helper.getAndWait(Helper.reactUrl + 'schedule/excel-export', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/excelexport_1');
        done();
    });
    it('Exportandimportics', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/calendar-export-import', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/exportandimport_1');
        done();
    });
    it('Print', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/print', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/print_1');
        done();
    });
    it('Rule-generate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/recurrence-editor-generate-rule', Helper.schedule);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);

        });
        browser.sleep(1000);
        browser.sleep(1000);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        //browser.compareScreen(element(By.className('control-section')), 'Schedulereact/rulegenerate_1');
        done();
    });
    it('Populate-rule', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/recurrence-editor-populate-rule', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('control-section')), 'Schedulereact/populaterule_1');
        done();
    });
    it('Keyboard-intercation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/keyboard-interaction', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/Keyboardinteraction_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.reactUrl + 'schedule/events', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.content-wrapper')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulereact/events_2');
        done();
    });

});