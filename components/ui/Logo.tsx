import Image from 'next/image';
import Link from 'next/link';
import React, { ReactElement } from 'react';

import { getRoute } from '../../pages';

import styles from './logo.module.scss';

const Logo: React.FC = (): ReactElement => (
    <Link href={getRoute()}>
        <Image alt="Logo" className={styles.logoImage} height={96} src="/images/logo.png" width={96} />
    </Link>
);

Logo.displayName = 'Logo';

export default Logo;
