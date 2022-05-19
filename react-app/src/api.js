import config from './config.json'

const searchAsync = async (searchString) =>{
    const url = new URL(config.apiBaseUrl);
    url.searchParams.set('s',searchString);
    url.searchParams.set('apikey',config.apiKey);

    return await fetch(url).then(r => r.json());
}

export const api = { searchAsync};