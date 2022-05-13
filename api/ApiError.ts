import { isEmpty, isNil } from 'lodash';

import { BaseApiError } from './BaseApiResponse';

class ApiError extends Error {
    private constructor(public cause: Error, public code: number, public message: string) {
        super(message);
    }

    static newInstance = (errors?: Array<BaseApiError>): ApiError => {
        if (isNil(errors) || isEmpty(errors)) {
            return new ApiError(new Error('Error'), -1, 'API Error');
        }

        // TODO: improve this
        return new ApiError(new Error(errors[0].cause), errors[0].code, errors[0].message);
    };
}

export default ApiError;
