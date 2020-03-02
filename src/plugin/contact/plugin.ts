import {PluginContent} from '../plugin-content';

export class Plugin extends PluginContent {
    render(options?: any) {
        return '<form method="post">\n' +
            '<p>\n' +
            '<label for="name">Name&nbsp;<span class="required">*</span></label>\n' +
            '<input type="text" name="name" id="name" autocomplete="name" value="">\n' +
            '</p>\n' +
            '<p>\n' +
            '<label for="email">E-mail&nbsp;<span class="required">*</span></label>\n' +
            '<input type="text" name="email" id="email" autocomplete="email" value="">\n' +
            '</p>\n' +
            '<p>\n' +
            '<label for="message">Message&nbsp;<span class="required">*</span></label>\n' +
            '<textarea name="message" id="message" autocomplete="message">' +
            '</textarea>' +
            '</p>\n' +
            '<p>\n' +
            '<button type="submit" name="send" value="Send">Send</button>\n' +
            '</p>\n' +
            '</form>';
    }
}
