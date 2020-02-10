import path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import { User } from './user';

const fileExists = promisify(fs.exists);

export class UserMgr {
    constructor(readonly repo: string) {
    }

    async findUser(username: string): User | undefined {
        const file = path.join(this.repo, username);

        if (!fileExists(file)) {
            return undefined;
        }

        return undefined;
    }
};
