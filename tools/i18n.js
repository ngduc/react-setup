import path from 'path';
import { sync as globSync } from 'glob';
import { readFileSync } from 'fs';
import serialize from 'serialize-javascript';

const translations = globSync('./dist/lang/*.json')
    .map((filename) => [
        path.basename(filename, '.json'),
        readFileSync(filename, 'utf8'),
    ])
    .map(([locale, file]) => [locale, JSON.parse(file)])
    .reduce((collection, [locale, messages]) => {
        collection[locale] = messages;
        return collection;
    }, {});

const locale = 'en-US';
const messages = translations[locale];
export const messagesJsonString = JSON.stringify(messages);
