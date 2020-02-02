import { Exam } from './exam'
import { Question } from './question'

export class QuestionRepo {
    private _subjects: string[] = [];
    get subjects() {
        return this._subjects
    }

    private _exams = new Map<string, Exam>();
    get exams(): Exam[] {
        return [...this._exams.values()];
    }

    private _questions = new Map<string, Question>();
    get questions(): Question[] {
        return [...this._questions.values()];
    }

    constructor() {
    }
};
