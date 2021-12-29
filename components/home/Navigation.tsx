import React, { ReactElement } from 'react';

import ListItem, { Item } from '../ui/ListItem';

import styles from './navigation.module.scss';

const navItems: Array<Item> = [
    { id: '1', labelId: 'layout.header.nav_cart' },
    { id: '2', labelId: 'layout.header.nav_login' },
];

const Navigation: React.FC = (): ReactElement => {
    return (
        <nav className={styles.container}>
            <ul className={styles.list}>
                {navItems.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
            </ul>
        </nav>
    );
};

Navigation.displayName = 'Navigation';

export default Navigation;
