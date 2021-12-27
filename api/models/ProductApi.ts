import Product from '../../model/Product';

// TODO: add reviews and images
// TODO: add builder
class ProductApi {
    constructor(
        public id: string,
        public price: number,
        public ratings: number | null,
        public numberOfReviews: number,
        public name: string,
        public description: string,
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
            productApi.numberOfReviews,
            productApi.name,
            productApi.description,
            [],
            productApi.category,
            productApi.seller,
            productApi.stock,
            [],
            productApi.createdAt,
        );
    };

    static toApi = (product: Product): ProductApi => {
        return new ProductApi(
            product.id,
            product.price,
            product.ratings,
            product.numberOfReviews,
            product.name,
            product.description,
            product.category,
            product.seller,
            product.stock,
            product.createdAt,
        );
    };
}

export default ProductApi;
