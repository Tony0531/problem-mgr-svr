export class User {
  constructor(
    readonly studentId: string,
    readonly name: string,
    private passwd: string) {
  }

  validatePasswd(passwd: string): boolean {
    return passwd == this.passwd
  }

  static fromData(studentId: string, data: any) {
    return new this(studentId, data['name'], data['passwd'])
  }
}
