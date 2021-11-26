import { IntlShape } from 'react-intl';

import { EMPTY_TEXT_ID } from '../../l10n/languages';

const getTextToRender = (id: string | undefined, text: string, intl: IntlShape): string => {
    if (!id || id === EMPTY_TEXT_ID) {
        return text;
    }

    return intl.formatMessage({ id });
};

export { getTextToRender };
