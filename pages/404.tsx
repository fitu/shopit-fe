import { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './404.module.scss';

const NotFoundPage = (): ReactElement => {
    return (
        <div className={styles.container}>
            <FormattedMessage id="not_found" />
        </div>
    );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
