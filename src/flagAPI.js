export function flagAPI(){
    const URL_ENDPOINT = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json";
    return fetch(URL_ENDPOINT).then(data=>data.json());
}