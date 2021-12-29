import englishGeneralStrings from './en/generalStrings.json';
import englishHomeStrings from './en/home/homeStrings.json';

const DEFAULT_LOCALE = 'en';
const DEFAULT_STRINGS = { ...englishGeneralStrings, ...englishHomeStrings };

// This should match with json files
const EMPTY_TEXT_ID = 'empty';

interface LanguageType {
    locale: string;
    stringId: string;
    strings: any;
}

const languages: Array<LanguageType> = [
    {
        locale: DEFAULT_LOCALE,
        stringId: 'landing.sidebar.english',
        strings: DEFAULT_STRINGS,
    },
];

const defaultLanguage = languages.find((language) => language.locale === DEFAULT_LOCALE);

const getLanguageData = (locale: string): LanguageType | undefined =>
    languages.find((language) => language.locale === locale);

export type { LanguageType };
export { DEFAULT_LOCALE, DEFAULT_STRINGS, EMPTY_TEXT_ID, defaultLanguage, getLanguageData };
export default languages;
