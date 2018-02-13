import MockApi from './mockapi'

let api;

class Api {
    constructor() {
        if (process.env.NODE_ENV !== 'production') return new MockApi()
    }
    getStuff() {
        return [
            'stuff from PRODUCTION api 1',
            'stuff from PRODUCTION api 2',
            'stuff from PRODUCTION api 3',
            'stuff from PRODUCTION api 4',
            'stuff from PRODUCTION api 5',
        ]
    }
}

export default Api
