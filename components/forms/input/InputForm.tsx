import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import { EMPTY_TEXT_ID } from '../../../l10n/languages';
import { getTextToRender } from '../../utils/textUtils';

import styles from './input.module.scss';

interface Props {
    isSubmitted: boolean;
    isValid?: boolean;
    label?: string;
    labelId?: string;
    name: string;
    onlyPositives?: boolean;
    onlyPositivesWithoutZero?: boolean;
    type?: string;
    placeHolder?: string;
    placeHolderId?: string;
    register?: ((name: any, options?: any) => void) | null;
    step?: number;
    validations?: any;
    value?: number | string | null;
}

const InputForm = ({
    isSubmitted,
    isValid,
    label = '',
    labelId = EMPTY_TEXT_ID,
    name,
    onlyPositives = true,
    onlyPositivesWithoutZero = false,
    placeHolder = '',
    placeHolderId = EMPTY_TEXT_ID,
    register = null,
    type = 'text',
    step = 1,
    validations = { required: true },
    value = null,
}: Props): ReactElement => {
    const intl = useIntl();

    const containerClasses = classNames(styles.inputContainer, {
        [styles.inputFileContainer]: type === 'file',
        [styles.inputValid]: isSubmitted && validations.required && isValid,
        [styles.inputInvalid]: isSubmitted && validations.required && !isValid,
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
                    {...register?.(name, validations)}
                />
            );
        }

        return <input placeholder={text} type={type} {...register?.(name, validations)} value={value ?? undefined} />;
    };

    const labelText = getTextToRender(labelId, label, intl);
    const placeHolderText = getTextToRender(placeHolderId, placeHolder, intl);

    return (
        <div className={containerClasses}>
            {(label || labelId) && <label htmlFor={name}>{labelText}</label>}
            {renderInput(placeHolderText)}
        </div>
    );
};

InputForm.propTypes = {
    isSubmitted: PropTypes.bool.isRequired,
    isValid: PropTypes.bool,
    label: PropTypes.string,
    labelId: PropTypes.string,
    name: PropTypes.string.isRequired,
    onlyPositives: PropTypes.bool,
    onlyPositivesWithoutZero: PropTypes.bool,
    placeHolder: PropTypes.string,
    placeHolderId: PropTypes.string,
    register: PropTypes.func,
    step: PropTypes.number,
    type: PropTypes.string,
    validations: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

InputForm.displayName = 'InputForm';

export default InputForm;
