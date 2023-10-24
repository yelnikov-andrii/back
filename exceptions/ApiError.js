export class ApiError extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message, errors) {
    return ApiError(400, message, errors)
  }

  static UnAuthorized() {
    return ApiError(401, 'User is not authorized')
  }

  static NotFound() {
    return ApiError(404, 'Not found');
  }
}