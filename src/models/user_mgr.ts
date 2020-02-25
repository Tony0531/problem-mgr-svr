import path from 'path'
import * as fs from 'fs'
import { promisify } from 'util'
import { User } from './user'

const fileExists = promisify(fs.exists)

export class UserMgr {
  readonly repo: string

  constructor(root: string | undefined) {
    this.repo = root ? `${root}/users` : "users"
  }

  async findUser(username: string): Promise<User | undefined> {
    const userFile = path.join(this.repo, username + ".json")

    const userFileExists = await fileExists(userFile)
    if (!userFileExists) {
      return undefined
    }

    const userDataBuffer = await fs.promises.readFile(userFile)

    const userData = JSON.parse(userDataBuffer.toString())

    return User.fromData(username, userData)
  }
}
