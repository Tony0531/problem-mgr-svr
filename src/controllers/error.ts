export enum ServerErrorCode {
  UserNotExists = 1,
  UserAuthFailed,
  ArgumentError,
}

export class ServerError extends Error {
  constructor(readonly code: ServerErrorCode, message?: string) {
    super(message || ServerErrorCode[code])
    this.name = this.constructor.name
  }

  static argumentError(message?: string) {
    return new ServerError(ServerErrorCode.ArgumentError, message)
  }
}
