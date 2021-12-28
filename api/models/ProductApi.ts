import { v4 as uuidv4 } from 'uuid';

import Image from '../../model/Image';
import Product from '../../model/Product';

// TODO: add reviews and images
// TODO: add builder
class ProductApi {
    constructor(
        public id: string,
        public price: number,
        public ratings: number | null,
        public numberOfReviews: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public category: string,
        public seller: string,
        public stock: number,
        public createdAt: string,
    ) {
        // Empty constructor
    }

    static toModel = (productApi: ProductApi): Product => {
        return new Product(
            productApi.id,
            productApi.price,
            productApi.ratings,
            productApi.numberOfReviews ?? 0,
            productApi.title,
            productApi.description,
            [new Image(uuidv4(), uuidv4(), productApi.imageUrl)],
            productApi.category,
            productApi.seller ?? '',
            productApi.stock,
            [],
            productApi.createdAt ?? new Date().toUTCString(),
        );
    };

    static toApi = (product: Product): ProductApi => {
        return new ProductApi(
            product.id,
            product.price,
            product.ratings,
            product.numberOfReviews,
            product.title,
            product.description,
            product.images[0].url,
            product.category,
            product.seller,
            product.stock,
            product.createdAt,
        );
    };
}

export default ProductApi;
