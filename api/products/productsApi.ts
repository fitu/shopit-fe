import { api, BASE_URL } from '../apiConfig';
import ApiError from '../ApiError';
import BaseApiResponse from '../BaseApiResponse';
import ProductApi from '../models/ProductApi';

const PRODUCTS_URL = `${BASE_URL}/products`;

const getAllProducts = async (): Promise<Array<ProductApi>> => {
    const { data } = await api.get<BaseApiResponse<Array<ProductApi>>>(PRODUCTS_URL);

    // FIXME: fis this 
    // if (!data.success) {
    //     throw ApiError.newInstance(data.errors);
    // }

    return [];
    // return data.data.map((productApi) => ProductApi.toModel(productApi));
};

export { getAllProducts };
