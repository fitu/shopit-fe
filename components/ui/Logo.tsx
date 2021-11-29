import React, { ReactElement } from 'react';

import styles from './logo.module.scss';

const Logo: React.FC = (): ReactElement =>
    <img className={styles.logoImage} src="/images/logo.png" alt="Logo" />

export default Logo;
