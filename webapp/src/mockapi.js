class MockApi {
    constructor() {
        console.log('mock api constructor')
    }
    getStuff = async () => {
        return [
            'stuff from mock api 1',
            'stuff from mock api 2',
            'stuff from mock api 3',
            'stuff from mock api 4',
            'stuff from mock api 5',
        ]
    }
}

export default MockApi