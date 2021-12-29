import Product from '../../model/Product';
import { api, BASE_URL } from '../apiConfig';
import ApiError from '../ApiError';
import BaseApiResponse from '../BaseApiResponse';
import ProductApi from '../models/ProductApi';

const PRODUCTS_URL = `${BASE_URL}/products`;

const getAllProducts = async (): Promise<Array<Product>> => {
    const { data } = await api.get<BaseApiResponse<Array<ProductApi>>>(PRODUCTS_URL);

    if (!data.success) {
        throw ApiError.newInstance(data.errors);
    }

    return data.data.map((productApi) => ProductApi.toModel(productApi));
};

const getProductById = async (id: string): Promise<Product> => {
    const { data } = await api.get<BaseApiResponse<ProductApi>>(`${PRODUCTS_URL}/${id}`);

    if (!data.success) {
        throw ApiError.newInstance(data.errors);
    }

    return ProductApi.toModel(data.data);
};

export { getAllProducts, getProductById };
