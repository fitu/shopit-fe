import classNames from 'classnames';
import { isEmpty, isNil } from 'lodash';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { useIntl } from 'react-intl';
import { EMPTY_TEXT_ID } from '../../l10n/languages';

import styles from './input.module.scss';

const InputValue = ({
    isSubmitted = false,
    isValid,
    label = '',
    labelId = EMPTY_TEXT_ID,
    name,
    onlyPositives = true,
    onlyPositivesWithoutZero = false,
    placeHolder = '',
    placeHolderId = EMPTY_TEXT_ID,
    type = 'text',
    step = 1,
    value,
    setValue,
}: Props): ReactElement => {
    const intl = useIntl();

    const containerClasses = classNames(styles.inputContainer, {
        [styles.inputFileContainer]: type === 'file',
        [styles.inputValid]: isSubmitted && isValid,
        [styles.inputInvalid]: isSubmitted && !isValid,
    });

    const renderInput = (text: string): ReactElement => {
        if (type === 'number') {
            const min = onlyPositivesWithoutZero ? 1 : onlyPositives ? 0 : undefined;
            return (
                <input
                    min={min}
                    placeholder={text}
                    step={step}
                    type={type}
                    value={value ?? undefined}
                    onChange={(event) => setValue(event.target.value)}
                />
            );
        }

        return (
            <input
                placeholder={text}
                type={type}
                value={value ?? undefined}
                onChange={(event) => setValue(event.target.value)}
            />
        );
    };

    const getTextToRender = (id: string, text: string): string => {
        if (isNil(id) || isEmpty(id) || id === EMPTY_TEXT_ID) {
            return text;
        }

        return intl.formatMessage({ id });
    }

    const labelText = getTextToRender(labelId, label);
    const placeHolderText = getTextToRender(placeHolderId, placeHolder);
    return (
        <div className={containerClasses}>
            {(label || labelId) && <label htmlFor={name}>{labelText}</label>}
            {renderInput(placeHolderText)}
        </div>
    );
};

interface Props {
    isSubmitted?: boolean;
    isValid?: boolean;
    label?: string;
    labelId?: string;
    name: string;
    onlyPositives?: boolean;
    onlyPositivesWithoutZero?: boolean;
    type?: string;
    placeHolder?: string;
    placeHolderId?: string;
    step?: number;
    value: number | string | null;
    setValue: (value: number | string) => void;
}

InputValue.propTypes = {
    isSubmitted: PropTypes.bool,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    labelId: PropTypes.string,
    name: PropTypes.string.isRequired,
    onlyPositives: PropTypes.bool,
    onlyPositivesWithoutZero: PropTypes.bool,
    placeHolder: PropTypes.string,
    placeHolderId: PropTypes.string,
    type: PropTypes.string,
    step: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    setValue: PropTypes.func.isRequired,
};

InputValue.displayName = 'InputValue';

export default InputValue;
