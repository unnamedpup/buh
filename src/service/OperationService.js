export class AxiosOperationService {

    constructor() {
        this.cache = [
            {id: 1, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
            {id: 2, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
            {id: 3, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
        ];
    }

    async createOperation (operation) {
        const newOperation = {...operation};
        newOperation.id = this.cache.length + 1;
        newOperation.date = Date.now();
        this.cache.push(newOperation);
        return newOperation;
    }

    async getOperations (limit= 10, pageNumber = 1) {
      return this.cache.slice();
    }
}
