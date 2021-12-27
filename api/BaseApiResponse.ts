interface BaseApiError {
    cause: string;
    code: number;
    message: string;
}

class BaseApiResponse<T> {
    constructor(public success: boolean, public data: T, public errors?: Array<BaseApiError>) {
        // Do nothing
    }
}

export type { BaseApiError };
export default BaseApiResponse;
