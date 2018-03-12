class MockApi {
    stuff = [
        'stuff from mock api 1',
        'stuff from mock api 2',
        'stuff from mock api 3',
        'stuff from mock api 4',
        'stuff from mock api 5'
    ]
    constructor() {
        console.log('mock api constructor')
    }
    addStuff = async (stuff) => {
        this.stuff.push(stuff)
    }
    getStuff = async () => {
        return this.stuff
    }
}

export default MockApi