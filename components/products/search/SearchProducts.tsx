import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import React, { ReactElement } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import InputForm from '../../forms/input/InputForm';
import ButtonWithIcon from '../../forms/button/ButtonWithIcon';

import { SEARCH, SearchProductsFormType } from './searchProductsFormTypes';
import styles from './searchProducts.module.scss';

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

    const onSubmit = async (formData: SearchProductsFormType): Promise<void> => {
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <InputForm
                isSubmitted={isSubmitted}
                isValid={errors[SEARCH] !== undefined}
                name={SEARCH}
                placeHolderId='layout.header.search_here'
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

