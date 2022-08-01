export class AxiosOperationService {

    async createOperation (operation) {

    }

    async getOperations (limit= 10, pageNumber = 1) {
        return [
            {id: 1, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
            {id: 2, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
            {id: 3, date: '01.01.2022', check: 'Прораб', type: 'Расход', category: 'Питание', desc: 'try', sum: 100},
        ];
    }
}