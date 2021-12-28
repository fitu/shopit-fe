import Image from './Image';
import Review from './Review';

// TODO: add builder
class Product {
    constructor(
        public id: string,
        public price: number,
        public ratings: number | null,
        public numberOfReviews: number,
        public title: string,
        public description: string,
        public images: Array<Image>,
        public category: string,
        public seller: string,
        public stock: number,
        public reviews: Array<Review>,
        public createdAt: string,
    ) {
        // Empty constructor
    }
}

export default Product;
