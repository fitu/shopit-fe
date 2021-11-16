import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { ReactElement } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import InputForm from '../../forms/input/InputForm';

import { SEARCH, SearchProductsFormType } from './searchProductsFormTypes';
import styles from './searchProducts.module.scss';
import ButtonWithIcon from '../../forms/button/ButtonWithIcon';

const SearchProducts: React.FC = (): ReactElement => {
    const validationSchema = Yup.object().shape({
        [SEARCH]: Yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<SearchProductsFormType>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (formData: SearchProductsFormType): Promise<void> => { }

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <InputForm
                isSubmitted={isSubmitted}
                isValid={errors[SEARCH] !== undefined}
                label='this is the label'
                name={SEARCH}
                placeHolder='this is the placeholder'
                register={register}
            />
            <div className={styles.searchButton}>
                <ButtonWithIcon isSubmit>
                    <FaSearch className={styles.searchIcon} />
                </ButtonWithIcon>
            </div>
        </form>
    )
};

export default SearchProducts;

