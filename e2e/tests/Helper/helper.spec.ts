/**
 * Helper Spec
 */
import { browser, element, By } from '@syncfusion/ej2-base/e2e/index';

export namespace Helper {
    export const tsUrl: string = 'https://ej2.syncfusion.com/demos/#/material/';
    export const jsUrl: string = 'https://ej2.syncfusion.com/javascript/demos/#/material/';
    export const reactUrl: string = 'https://ej2.syncfusion.com/react/demos/#/material/';
    export const anglrUrl: string = 'https://ej2.syncfusion.com/angular/demos/#/material/';
    export const vueUrl: string = 'https://ej2.syncfusion.com/vue/demos/#/material/';
    export const schedule: object = By.css('.e-schedule');
    export const toolbar: object = By.css('.e-toolbar');
    export const tab: object = By.css('.e-tab');
    export const kanban: object = By.css('.e-kanban-content');
    export const card: object = By.css('.e-card');
    export const accordion: object = By.css('.e-accordion');
    export const button: object = By.id('radio2');
    export const content: object = By.className('e-tip-content');
    export const today: object = By.className('e-today');
    export const day: object = By.className('e-day');
    export const month: object = By.className('e-month');
    export const week: object = By.className('e-week');
    export const workweek: object = By.className('e-work-week');
    export const agenda: object = By.className('e-agenda');
    export const monthAgenda: object = By.className('e-month-agenda');
    export const tDay: object = By.className('e-timeline-day');
    export const tWeek: object = By.className('e-timeline-week');
    export const tWorkWeek: object = By.className('e-timeline-work-week');
    export const tMonth: object = By.className('e-timeline-month');
    export const getAndWait: Function = (url: string, ele: Element, time: number = 100000) => {
        browser.get(url);
        browser.wait(browser.ExpectedConditions.presenceOf(element(ele)), time);
        browser.driver.manage().window().maximize();
    };
}
