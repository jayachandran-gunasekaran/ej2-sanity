import { browser, element, By, ElementFinder } from '@syncfusion/ej2-base/e2e/index';
import { Helper } from './Helper/helper.spec';
let elementFinder: ElementFinder = element(By.css('.e-schedule'));

    describe('Typescript Schedule Sanity', () => {
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
        Helper.getAndWait(Helper.baseUrl + 'schedule/overview.html', Helper.schedule);
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

    it('Default', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/default.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/Default_1');
        done();
    });
    it('Localdata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/local-data.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/local_1');
        done();
    });
    it('Remotedata', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/remote-data.html', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/remote');
        done();
    });
    it('Syncgooglecalendar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/calendar-integration.html', Helper.schedule);

        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/sync');
        done();
    });
    it('Recurringevents', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/recurrence-events.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);

        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/recurre_1');
        done();
    });
    it('Blockevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/block-events.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/block');
        done();
    });
    it('Search-event', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/search-events.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/searchevent_1');
        done();
    });
    it('Timezone', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/timezone.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/timezone');
        done();
    });
    
    it('Dragdrop', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/external-drag-drop.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/dragdrop_1');
        done();
    });
    it('Inline-editor', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/inline-editing.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/inline_1');
        done();
    });
    it('Virtual-scroll', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/virtual-scrolling.html', Helper.schedule);
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
        Helper.getAndWait(Helper.baseUrl + 'schedule/views.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/basicview_1');
        done();
    });
    it('Timelineview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/timeline.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/timeline_1');
        done();
    });
    it('Agendaview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/agenda.html', Helper.schedule);
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
        Helper.getAndWait(Helper.baseUrl + 'schedule/month-agenda.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/monthagenda_1');
        done();
    });
    it('Yearview', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/year.html', Helper.schedule);
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
        Helper.getAndWait(Helper.baseUrl + 'schedule/views-configuration.html', Helper.schedule);
        browser.sleep(1000);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/individual_1');
        done();
    });
    it('Viewinterval', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/extended-views.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/viewinterval_1');
        done();
    });
    it('Roomscheduler', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/timeline-resources.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/roomscheduler_1');
        done();
    });
    it('Farecal', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/resources.html', Helper.schedule);
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
        Helper.getAndWait(Helper.baseUrl + 'schedule/resource.html', Helper.schedule);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/resources_1');
        done();
    });
    it('Sharedevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/group-editing.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/sharedevent_1');
        done();
    });
    it('Differentworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/group-custom-work-days.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/differentwork_1');
        done();
    });
    it('Showandhide', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/add-remove-resources.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/showandhide_1');
        done();
    });
    it('Rowautoheight', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/adaptive-rows.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/rowauto_1');
        done();
    });
    it('Horizontalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/resource-grouping.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/horizontalgroup');
        done();
    });
    it('Timelinegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/timeline-resource-grouping.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/timelinegroup_1');
        done();
    });
    it('Datewisegroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/group-by-date.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/datewise_1');
        done();
    });
    it('Hierarchicalgroup', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/group-by-child.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/hierarchical_1');
        done();
    });
    it('Cell', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/cell-template.html', Helper.schedule2);
        await element(By.css('.container-fluid')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/cell_1');
        done();
    });
    it('Dateheader', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/date-header-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/dateheader_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/event-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/events_1');
        done();
    });
    it('Tooltip', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/tooltip.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/tooltip_1');
        done();
    });
    it('Quickinfo', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/quick-info-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/quickinfo_1');
        done();
    });
    it('Fieldvalidation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/editor-validation.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/fieldvalidation_1');
        done();
    });
    it('Additionalfield', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/editor-custom-field.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/additionalfield_1');
        done();
    });
    it('Editortemplate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/editor-template.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/editortemplate_1');
        done();
    });
    it('Header-rows', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/header-rows.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/headerrow_1');
        done();
    });
    it('Time-scale', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/time-scale.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/timescale_1');
        done();
    });
    it('Context-menu', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/context-menu.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/contextmenu_1');
        done();
    });
    it('Header-bar', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/header-bar.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/headerbar_1');
        done();
    });
    it('Scroll-time', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/scroll-to.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/scrolltime_1');
        done();
    });
    it('Work-days', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/work-days.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/workdays_1');
        done();
    });
    it('Hide-nonworkdays', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/hide-weekend.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/hidenonwork_1');
        done();
    });
   it('Work-hour', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/work-hour.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/workhour_1');
        done();
    });
    it('Day-hourlimit', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/start-end-hour.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/dayhourlimit_1');
        done();
    });
    it('Cell-dimension', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/cell-dimension.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/celldimension_1');
        done();
    });
    it('Read-onlyevent', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/read-only-events.html', Helper.schedule);
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
        Helper.getAndWait(Helper.baseUrl + 'schedule/excel-export.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/excelexport_1');
        done();
    });
    it('Exportandimportics', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/calendar-export-import.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/exportandimport_1');
        done();
    });
    it('Print', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/print.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/print_1');
        done();
    });
    it('Rule-generate', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/recurrence-editor-generate-rule.html', Helper.schedule1);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);

        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('control-section')), 'Schedule/rulegenerate_1');
        done();
    });
    it('Populate-rule', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/recurrence-editor-populate-rule.html', Helper.schedule1);
        browser.sleep(1000);
        await element(By.css('.recurrence-editor-wrap')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(3000);
        browser.compareScreen(element(By.className('control-section')), 'Schedule/populaterule_1');
        done();
    });
    it('Keyboard-intercation', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/keyboard-interaction.html', Helper.schedule);
        await element(By.css('.e-schedule')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/Keyboardinteraction_1');
        done();
    });
    it('Events', async (done: DoneFn) => {
        Helper.getAndWait(Helper.baseUrl + 'schedule/events.html', Helper.schedule);
        await element(By.css('.content-wrapper')).isDisplayed().then((flag: boolean) => {
            expect(flag).toEqual(true);
        });
        browser.sleep(1000);
        browser.sleep(1000);
        browser.compareScreen(element(By.className('container-fluid')), 'Schedule/events_2');
        done();
    });

});