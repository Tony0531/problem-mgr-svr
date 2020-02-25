export class User {
  constructor(readonly name: string, private passwd: string) {
  }

  validatePasswd(passwd: string): boolean {
    return passwd == this.passwd
  }

  static fromData(name: string, data: any) {
    return new this(name, data['passwd'])
  }
}
