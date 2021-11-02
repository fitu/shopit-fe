import Image from './Image';
import Review from './Review';

class Product {
    constructor(
        public price: number,
        public ratings: number | null,
        public numOfReviews: number,
        public _id: string,
        public name: string,
        public description: string,
        public images: Array<Image>,
        public category: string,
        public seller: string,
        public stock: number,
        public reviews: Array<Review>,
        public createdAt: string,
    ) {}
}

export default Product;
