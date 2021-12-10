import Image from 'next/image';
import React, { ReactElement } from 'react';

import styles from './logo.module.scss';

const Logo: React.FC = (): ReactElement => (
    <Image alt="Logo" className={styles.logoImage} height={96} src="/images/logo.png" width={96} />
);

Logo.displayName = 'Logo';

export default Logo;
