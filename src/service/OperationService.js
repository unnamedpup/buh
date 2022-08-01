export class AxiosOperationService {

    constructor() {
        this.cache = [
            {id: 1, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
            {id: 2, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
            {id: 3, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
        ];
    }

    async createOperation (operation) {
      console.log('operation:', operation);
      operation.id = this.cache.length + 1;
      console.log('operation:', operation);
      this.cache.push(operation);
      return operation;
    }

    async getOperations (limit= 10, pageNumber = 1) {
      return this.cache.slice();
    }
}
