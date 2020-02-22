import * as path from "path";
import {config} from '../config';
import {PageContent} from './page-content';

export class PageBuilder {
    getPage(params): any {
        try {
            if (!params.page) {
                return require('./index/page');
            } else {
                return require(`./${params.page}/page`);
            }
        }
        catch (e) {
            return require('./404/page');
        }
    }

    build = (req, res) => {
        const page = this.getPage(req.params);
        const content = new page.Page().render();

        res.render(`index.ejs`, {
            indexPage: path.join(`web/${config.theme}/page.ejs`),
            content: content,
            folders: {
                templateFolder: `${__dirname}/web/${config.theme}`
            }
        });
    }
}
