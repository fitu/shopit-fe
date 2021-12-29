import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { useIntl } from 'react-intl';

import InputForm from '../forms/input/InputForm';
import { getTextToRender } from '../utils/textUtils';

import styles from './label.module.scss';

interface Props {
    isEditMode?: boolean;
    isSubmitted?: boolean;
    isValid?: boolean;
    name: string;
    register?: ((name: any, options?: any) => void) | null;
    text?: string;
    textId?: string;
    validations?: any;
}

const Label = ({
    isEditMode = false,
    isSubmitted = false,
    isValid = false,
    name,
    register = null,
    text,
    textId,
    validations = { required: true },
}: Props): ReactElement => {
    const intl = useIntl();

    if (!isEditMode) {
        return <span className={styles.label}>{getTextToRender(textId, text ?? '', intl)}</span>;
    }

    return (
        <InputForm
            isSubmitted={isSubmitted}
            isValid={isValid}
            name={name}
            register={register}
            validations={validations}
            value={text}
        />
    );
};

Label.propTypes = {
    isEditMode: PropTypes.bool,
    isSubmitted: PropTypes.bool,
    isValid: PropTypes.bool,
    name: PropTypes.string,
    register: PropTypes.func,
    text: PropTypes.string,
    textId: PropTypes.string,
    validations: PropTypes.object,
};

Label.displayName = 'Label';

export default Label;
