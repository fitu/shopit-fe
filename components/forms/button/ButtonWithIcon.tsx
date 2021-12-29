import classNames from 'classnames';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';
import { useIntl } from 'react-intl';

import { EMPTY_TEXT_ID } from '../../../l10n/languages';
import { getTextToRender } from '../../utils/textUtils';

import styles from './button.module.scss';

interface Props {
    isSubmit?: boolean;
    title?: string;
    titleId?: string;
    onClick?: () => void;
}

const ButtonWithIcon: React.FC<Props> = ({
    isSubmit = false,
    title = '',
    titleId = EMPTY_TEXT_ID,
    onClick = noop,
    children,
}): ReactElement => {
    const intl = useIntl();

    const containerClasses = classNames(styles.buttonIconContainer);
    const textClasses = classNames(styles.buttonIconText);

    const renderTitle = (): ReactNode | null =>
        titleId ? <span className={textClasses}>{getTextToRender(titleId, title, intl)}</span> : null;

    const type = isSubmit ? 'submit' : 'button';

    return (
        <button className={containerClasses} type={type} onClick={onClick}>
            {children}
            {renderTitle()}
        </button>
    );
};

ButtonWithIcon.propTypes = {
    isSubmit: PropTypes.bool,
    title: PropTypes.string,
    titleId: PropTypes.string,
    onClick: PropTypes.func,
};

ButtonWithIcon.displayName = 'ButtonWithIcon';

export default ButtonWithIcon;
