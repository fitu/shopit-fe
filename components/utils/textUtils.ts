import { isEmpty, isNil } from 'lodash';
import { IntlShape } from 'react-intl';

import { EMPTY_TEXT_ID } from '../../l10n/languages';

const getTextToRender = (id: string, text: string, intl: IntlShape): string => {
    if (isNil(id) || isEmpty(id) || id === EMPTY_TEXT_ID) {
        return text;
    }

    return intl.formatMessage({ id });
};

export { getTextToRender };
