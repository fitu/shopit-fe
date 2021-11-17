import classNames from 'classnames';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { EMPTY_TEXT_ID } from '../../../l10n/languages';
import { getTextToRender } from '../../utils/textUtils';

import styles from './button.module.scss';

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

    const renderTitle = (): ReactNode => (
        titleId ? (
            <span className={textClasses}>
                {getTextToRender(titleId, title, intl)}
            </span>
        ) : (<></>)
    );

    const type = isSubmit ? 'submit' : 'button';

    return (
        <button className={containerClasses} type={type} onClick={onClick}>
            {children}
            {renderTitle()}
        </button>
    );
};

interface Props {
    isSubmit?: boolean;
    title?: string;
    titleId?: string;
    onClick?: () => void;
}

ButtonWithIcon.propTypes = {
    isSubmit: PropTypes.bool,
    title: PropTypes.string,
    titleId: PropTypes.string,
    onClick: PropTypes.func,
};

ButtonWithIcon.displayName = 'ButtonWithIcon';

export default ButtonWithIcon;
