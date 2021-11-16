import classNames from 'classnames';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React, { ReactElement, ReactNode } from 'react';
import { useIntl } from 'react-intl';
import { EMPTY_TEXT_ID } from '../../../l10n/languages';
import { getTextToRender } from '../../utils/textUtils';

import styles from './button.module.scss';

const ButtonWithIcon: React.FC<Props> = ({
    iconId = '',
    isSubmit = false,
    title = '',
    titleId = EMPTY_TEXT_ID,
    onClick = noop,
    children,
}): ReactElement => {
    const intl = useIntl();

    const containerClasses = classNames(styles.buttonIconContainer);
    const iconClasses = classNames(styles.buttonIconIcon);
    const textClasses = classNames(styles.buttonIconText);

    const renderIcon = (): ReactNode => {
        if (React.Children.count(children)) {
            return children;
        }

        return <i className={`fas ${iconId}`} />;
    }

    const type = isSubmit ? 'submit' : 'button';

    return (
        <button className={containerClasses} type={type} onClick={onClick}>
            {iconId && (
                <div className={iconClasses}>
                    {renderIcon()}
                </div>
            )}
            {titleId && (
                <span className={textClasses}>
                    {getTextToRender(titleId, title, intl)}
                </span>
            )}
        </button>
    );
};

interface Props {
    iconId?: string;
    isSubmit?: boolean;
    title?: string;
    titleId?: string;
    onClick?: () => void;
}

ButtonWithIcon.propTypes = {
    iconId: PropTypes.string,
    isSubmit: PropTypes.bool,
    title: PropTypes.string,
    titleId: PropTypes.string,
    onClick: PropTypes.func,
};

ButtonWithIcon.displayName = 'ButtonWithIcon';

export default ButtonWithIcon;
