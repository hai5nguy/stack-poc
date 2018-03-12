import MockApi from './mockapi'

class Api {
    constructor() {
        if (STACK === 'none') return new MockApi()
    }
    async getStuff() {

        const graph = `
            query {
                stuff
            }
        `
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/graphql',
                'Accept': 'application/json'
            },
            body: graph
        });
        const json = await response.json();
        
        return json.data.stuff;
    }
}

export default Api
