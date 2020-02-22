import * as path from "path";
import {config} from '../config';

export class PageBuilder {
    build = (req, res) => {
        const page = require('./index/page');

        res.render(`index.ejs`, {
            indexPage: path.join(`web/${config.theme}/page.ejs`),
            content: new page.Page().render(),
            folders: {
                templateFolder: `${__dirname}/web/${config.theme}`
            }
        });
    }
}
