import {config} from './config';
import * as path from 'path';

const express = require('express');
const app = express();

app.use('/assets', express.static(`${__dirname}/views/web/${config.theme}/assets`));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
    res.render(`index.ejs`, {
        indexPage: path.join(`web/${config.theme}/index.ejs`),
        content: 'page.ejs',
        folders: {
            templateFolder: `${__dirname}/web/${config.theme}`
        }
    });
});

app.listen(config.server_port, function () {
    console.log(`Blog.js listening on port ${config.server_port}!`)
}).json
