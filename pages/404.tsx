import { ReactElement } from 'react';

import styles from './404.module.scss';

const NotFoundPage = (): ReactElement => {
    return <div className={styles.container}>Fooo! 404</div>;
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
