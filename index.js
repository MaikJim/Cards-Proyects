//variables
const API_PLACEHOLDER_USERS = (id) => `https://jsonplaceholder.typicode.com/users/${id}`;
const API_PLACEHOLDER_PHOTO = 'https://jsonplaceholder.typicode.com/photos';

const spanError = document.getElementById('error');

//functions
async function loadRandomPhoto(){
    const res = await fetch(API_PLACEHOLDER_PHOTO)
    const data = await res.json()
    if (res.status !== 200) {
        spanError.innerHTML = `Error:${res.status}`;
    }
    else {
        const img1 = document.getElementById('img1');
        const img2 = document.getElementById('img2');
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}
loadRandomPhoto();