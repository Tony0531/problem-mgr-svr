export enum ServerErrorCode {
  UserNotExists = 1,
  UserAuthFailed,
}

export class ServerError extends Error {
  constructor(readonly code: ServerErrorCode, message?: string) {
    super(message || ServerErrorCode[code])
    this.name = this.constructor.name
  }
}
