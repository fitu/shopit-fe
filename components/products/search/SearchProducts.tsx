import { yupResolver } from '@hookform/resolvers/yup';
import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';

import ButtonWithIcon from '../../forms/button/ButtonWithIcon';
import InputForm from '../../forms/input/InputForm';

import styles from './searchProducts.module.scss';
import { SEARCH, SearchProductsFormType } from './searchProductsFormTypes';

const SearchProducts: React.FC = (): ReactElement => {
    const validationSchema = Yup.object().shape({ [SEARCH]: Yup.string().required() });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm<SearchProductsFormType>({ resolver: yupResolver(validationSchema) });

    const onSubmit = async (formData: SearchProductsFormType): Promise<void> => { };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <InputForm
                isSubmitted={isSubmitted}
                isValid={errors[SEARCH] !== undefined}
                name={SEARCH}
                placeHolderId="layout.header.search_here"
                register={register}
            />
            <div className={styles.searchButton}>
                <ButtonWithIcon isSubmit>
                    <FaSearch className={styles.searchIcon} />
                </ButtonWithIcon>
            </div>
        </form>
    );
};

SearchProducts.displayName = 'SearchProducts';

export default SearchProducts;
