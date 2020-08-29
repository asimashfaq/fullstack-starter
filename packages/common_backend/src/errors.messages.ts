import { HttpError } from 'http-json-errors';
import _ from 'lodash';

const enum ErrorCode {
  NO_RECORD = 'NO_RECORD',
  MISSING_REQUIRED_FIELDS = 'MISSING_REQUIRED_FIELDS',
  NOT_FOUND_ERROR = 'NOT_FOUND_ERROR',
  FORBIDDEN_ERROR = 'FORBIDDEN_ERROR',
  BAD_REQUEST_ERROR = 'BAD_REQUEST_ERROR',
  PAYLOAD_ERROR = 'PAYLOAD_ERROR',
  CONFLICT_ERROR = 'CONFLICT_ERROR',
  NOT_IMPLEMENTED_ERROR = 'NOT_IMPLEMENTED_ERROR',
  PRE_CONDITION_FAILED_ERROR = 'PRE_CONDITION_FAILED_ERROR',
}

export const PerConditionFailed = (message = ''): void => {
  throw new HttpError(412, {
    message,
    title: ErrorCode.PRE_CONDITION_FAILED_ERROR,
    body: {
      error_code: ErrorCode.PRE_CONDITION_FAILED_ERROR,
      error_text: message,
    },
  });
};
export const NoRecordError = (message = ''): void => {
  throw new HttpError(404, {
    message,
    title: ErrorCode.NO_RECORD,
    body: {
      error_code: ErrorCode.NO_RECORD,
      error_text: message,
    },
  });
};

export const NotFoundError = (message = ''): void => {
  throw new HttpError(404, {
    message,
    title: ErrorCode.NOT_FOUND_ERROR,
    body: {
      error_code: ErrorCode.NOT_FOUND_ERROR,
      error_text: message,
    },
  });
};

export const ForbiddenError = (message = ''): void => {
  throw new HttpError(403, {
    message,
    title: ErrorCode.FORBIDDEN_ERROR,
    body: {
      error_code: ErrorCode.FORBIDDEN_ERROR,
      error_text: message,
    },
  });
};

export const MissingRequiredFieldsError = (message = ''): void => {
  throw new HttpError(400, {
    message,
    title: ErrorCode.MISSING_REQUIRED_FIELDS,
    body: {
      error_code: ErrorCode.MISSING_REQUIRED_FIELDS,
      error_text: message,
    },
  });
};

export const BadRequestError = (message = ''): void => {
  throw new HttpError(400, {
    message,
    title: ErrorCode.BAD_REQUEST_ERROR,
    body: {
      error_code: ErrorCode.BAD_REQUEST_ERROR,
      error_text: message,
    },
  });
};

export const NotImplementedError = (message = ''): void => {
  throw new HttpError(400, {
    message,
    title: ErrorCode.NOT_IMPLEMENTED_ERROR,
    body: {
      error_code: ErrorCode.NOT_IMPLEMENTED_ERROR,
      error_text: message,
    },
  });
};

export const PayloadError = (message = ''): void => {
  throw new HttpError(412, {
    message,
    title: ErrorCode.PAYLOAD_ERROR,
    body: {
      error_code: ErrorCode.PAYLOAD_ERROR,
      error_text: message,
    },
  });
};

export const ConflictError = (message = ''): void => {
  throw new HttpError(409, {
    message,
    title: ErrorCode.CONFLICT_ERROR,
    body: {
      error_code: ErrorCode.CONFLICT_ERROR,
      error_text: message,
    },
  });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ParseError = (e: any, message: string): void => {
  let errorMessage = e;

  if (
    errorMessage?.title === 'NOT_FOUND_ERROR' ||
    errorMessage?.title === 'CONFLICT_ERROR'
  ) {
    throw e;
  }

  try {
    if (e.name.trim() === 'Error') {
      errorMessage = JSON.parse(e?.message);
    }
  } catch (__) {
    errorMessage = e?.message;
  }

  if (errorMessage?.name === 'ValidationError') {
    if (!_.isEmpty(e?.inner)) {
      throw PayloadError(
        JSON.stringify(
          errorMessage.inner.map((validationError) => ({
            message: validationError.message,
            field: validationError.path,
          })),
        ),
      );
    }
    throw PayloadError(e?.message);
  }
};
