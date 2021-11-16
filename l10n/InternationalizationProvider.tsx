import React, { ReactElement, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';

import Languages, { DEFAULT_LOCALE, DEFAULT_STRINGS } from './languages';

interface LanguageContextType {
    locale: string;
    selectLanguage: any;
}

const LanguageContext = React.createContext<LanguageContextType>({
    locale: DEFAULT_LOCALE,
    selectLanguage: DEFAULT_STRINGS,
});

const InternationalizationProvider: React.FC = ({ children }): ReactElement => {
    const [locale, setLocale] = useState<string>(DEFAULT_LOCALE);
    const [messages, setMessages] = useState<any>(DEFAULT_STRINGS);

    useEffect(() => {
        const browserLanguage = navigator.language.split(/[_-]/)[0];
        setLocale(() => browserLanguage);
    }, []);

    const selectLanguage = (newLocale: string): void => {
        setLocale(() => newLocale);
        const newLanguageSelected = Languages.find((language) => language.locale === newLocale);
        setMessages(() => newLanguageSelected?.strings ?? DEFAULT_STRINGS);
    };

    return (
        <LanguageContext.Provider value={{ locale, selectLanguage }}>
            <IntlProvider defaultLocale={DEFAULT_LOCALE} locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LanguageContext.Provider>
    );
};

InternationalizationProvider.displayName = 'InternationalizationProvider';

export { LanguageContext };
export default InternationalizationProvider;
