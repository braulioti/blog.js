import {PageContent} from '../page-content';

export class Page extends PageContent {
    render(options?: any) {
        return '<h1>Page Index Content!!</h1>';
    }

    getPagePlugins() {
        return [];
    }
}
