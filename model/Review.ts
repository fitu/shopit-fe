// TODO: add builder
class Review {
    constructor(
        public id: string,
        public user: string,
        public name: string,
        public rating: number,
        public comment: string,
    ) {
        // Empty constructor
    }
}

export default Review;
