import classNames from 'classnames';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import { EMPTY_TEXT_ID } from '../../../l10n/languages';
import { getTextToRender } from '../../utils/textUtils';

import styles from './button.module.scss';

interface Props {
    isBold?: boolean;
    isDisabled?: boolean;
    isRounded?: boolean;
    isSubmit?: boolean;
    title?: string;
    titleId?: string;
    onClick?: () => void;
}

const PrimaryButton: React.FC<Props> = ({
    isBold = false,
    isDisabled = false,
    isRounded = false,
    isSubmit = false,
    title = '',
    titleId = EMPTY_TEXT_ID,
    onClick = noop,
}): ReactElement => {
    const intl = useIntl();

    const buttonClasses = classNames(styles.primaryButton, {
        [styles.primaryButtonBold]: isBold,
        [styles.primaryButtonDisabled]: isDisabled,
        [styles.primaryButtonRounded]: isRounded,
    });

    const type = isSubmit ? 'submit' : 'button';

    return (
        <button className={buttonClasses} disabled={isDisabled} type={type} onClick={onClick}>
            {getTextToRender(titleId, title, intl)}
        </button>
    );
};

PrimaryButton.propTypes = {
    isBold: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isRounded: PropTypes.bool,
    isSubmit: PropTypes.bool,
    title: PropTypes.string,
    titleId: PropTypes.string,
    onClick: PropTypes.func,
};

PrimaryButton.displayName = 'PrimaryButton';

export default PrimaryButton;
