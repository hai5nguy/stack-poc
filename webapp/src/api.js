import MockApi from './mockapi'

let api;

class Api {
    constructor() {
        if (process.env.NODE_ENV !== 'production') return new MockApi()
    }
    test() {
        console.log('api.test()')
    }
}

export default Api
