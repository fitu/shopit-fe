class Review {
    constructor(
        public _id: string,
        public user: string,
        public name: string,
        public rating: number,
        public comment: string,
    ) {}
}

export default Review;
