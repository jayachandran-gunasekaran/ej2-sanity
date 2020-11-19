/**
 * Test case
 */
import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from '../Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-schedule'));

describe('Vue Schedule Sanity', () => {
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
        Helper.getAndWait(Helper.vueUrl + 'schedule/overview.html', Helper.schedule);
        browser.sleep(3000);
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
        Helper.getAndWait(Helper.vueUrl + 'schedule/default.html', Helper.schedule);
        browser.sleep(3000);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/Default_1');
        done();
    });
    it('Localdata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/local-data.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/local_1');
        done();
    });
    it('Remotedata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/remote-data.html', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/remote');
        done();
    });
    it('Syncgooglecalendar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/calendar-integration.html', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/sync');
        done();
    });
    it('Recurringevents', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/recurrence-events.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);

        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/recurre_1');
        done();
    });
    it('Blockevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/block-events.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/block');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/search-events.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/searchevent_1');
        done();
    });
    it('Timezone', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/timezone.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/timezone');
        done();
    });

    it('Dragdrop', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/external-drag-drop.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/dragdrop_1');
        done();
    });
    it('Inline-editor', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/inline-editing.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/inline_1');
        done();
    });
    it('Virtual-scroll', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/virtual-scrolling.html', Helper.schedule);
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
        Helper.getAndWait(Helper.vueUrl + 'schedule/views.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/basicview_1');
        done();
    });
    it('Timelineview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/timeline.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/timeline_1');
        done();
    });
    it('Agendaview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/agenda.html', Helper.schedule);
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
        Helper.getAndWait(Helper.vueUrl + 'schedule/month-agenda.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/monthagenda_1');
        done();
    });
    it('Yearview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/year.html', Helper.schedule);
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
        Helper.getAndWait(Helper.vueUrl + 'schedule/views-configuration.html', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/individual_1');
        done();
    });
    it('Viewinterval', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/extended-views.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/viewinterval_1');
        done();
    });
    it('Roomscheduler', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/timeline-resources.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/roomscheduler_1');
        done();
    });
    it('Farecal', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/resources.html', Helper.schedule);
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
        Helper.getAndWait(Helper.vueUrl + 'schedule/resource.html', Helper.schedule);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/resources_1');
        done();
    });
    it('Sharedevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/group-editing.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/sharedevent_1');
        done();
    });
    it('Differentworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/group-custom-work-days.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(2000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/differentwork_1');
        done();
    });
    it('Showandhide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/add-remove-resources.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/showandhide_1');
        done();
    });
    it('Rowautoheight', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/adaptive-rows.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/rowauto_1');
        done();
    });
    it('Horizontalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/resource-grouping.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/horizontalgroup');
        done();
    });
    it('Timelinegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/timeline-resource-grouping.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/timelinegroup_1');
        done();
    });
    it('Datewisegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/group-by-date.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/datewise_1');
        done();
    });
    it('Hierarchicalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/group-by-child.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/hierarchical_1');
        done();
    });
    it('Cell', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/cell-template.html', Helper.schedule);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/cell_1');
        done();
    });
    it('Dateheader', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/date-header-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/dateheader_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/event-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/events_1');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/tooltip.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/tooltip_1');
        done();
    });
    it('Quickinfo', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/quick-info-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/quickinfo_1');
        done();
    });
    it('Fieldvalidation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/editor-validation.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/fieldvalidation_1');
        done();
    });
    it('Additionalfield', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/editor-custom-field.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/additionalfield_1');
        done();
    });
    it('Editortemplate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/editor-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/editortemplate_1');
        done();
    });
    it('Header-rows', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/header-rows.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/headerrow_1');
        done();
    });
    it('Time-scale', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/time-scale.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/timescale_1');
        done();
    });
    it('Context-menu', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/context-menu.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/contextmenu_1');
        done();
    });
    it('Header-bar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/header-bar.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/headerbar_1');
        done();
    });
    it('Scroll-time', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/scroll-to.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/scrolltime_1');
        done();
    });
    it('Work-days', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/work-days.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/workdays_1');
        done();
    });
    it('Hide-nonworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/hide-weekend.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/hidenonwork_1');
        done();
    });
    it('Work-hour', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/work-hour.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/workhour_1');
        done();
    });
    it('Day-hourlimit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/start-end-hour.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/dayhourlimit_1');
        done();
    });
    it('Cell-dimension', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/cell-dimension.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/celldimension_1');
        done();
    });
    it('Read-onlyevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.tsUrl + 'schedule/read-only-events.html', Helper.schedule);
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
        Helper.getAndWait(Helper.vueUrl + 'schedule/excel-export.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/excelexport_1');
        done();
    });
    it('Exportandimportics', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/calendar-export-import.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/exportandimport_1');
        done();
    });
    it('Print', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/print.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/print_1');
        done();
    });
    it('Rule-generate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/recurrence-editor-generate-rule.html', Helper.schedule);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);

        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('control-section')), 'Schedulevue/rulegenerate_1');
        done();
    });
    it('Populate-rule', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/recurrence-editor-populate-rule.html', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('control-section')), 'Schedulevue/populaterule_1');
        done();
    });
    it('Keyboard-intercation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/keyboard-interaction.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/Keyboardinteraction_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.vueUrl + 'schedule/events.html', Helper.schedule);
        await element(By.css('.content-wrapper')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedulevue/events_2');
        done();
    });

});