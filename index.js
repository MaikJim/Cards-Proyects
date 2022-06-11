const API_PLACEHOLDER = 'https://jsonplaceholder.typicode.com/photos?limit=3';

async function loadRandomUsers() {
    const res = await fetch(API_PLACEHOLDER);
    var data = await res.jason;
    console.log('Random');
    console.log(data);
}
console.log(loadRandomUsers());
