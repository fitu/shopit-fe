import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import { getTextToRender } from '../utils/textUtils';

import styles from './listItem.module.scss';

interface Item {
    id: string;
    label?: string;
    labelId?: string;
    onClick?: (id: string) => void;
}

const ListItem = ({ item }: Props): ReactElement => {
    const intl = useIntl();

    const { id, label, labelId, onClick } = item;

    return (
        <li className={styles.item}>
            <button className={styles.button} type="button" onClick={() => onClick?.(id)}>
                {getTextToRender(labelId, label ?? '', intl)}
            </button>
        </li>
    );
};

interface Props {
    item: Item;
}

const itemShape = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelId: PropTypes.string,
    onClick: PropTypes.func,
};

ListItem.propTypes = { item: PropTypes.objectOf(PropTypes.shape(itemShape)).isRequired };

ListItem.displayName = 'ListItem';

export type { Item };
export default ListItem;
