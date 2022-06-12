//variables
const API_PLACEHOLDER_USERS = 'https://jsonplaceholder.typicode.com/users';
const API_PLACEHOLDER_PHOTO = 'https://jsonplaceholder.typicode.com/photos';

const spanError = document.getElementById('error');
const random = () => function getRandom(){
    return Math.floor(Math.random() * (10-1)+1)
};

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
        img1.src = data[Math.floor(Math.random() * (5000-1)+1)].url;
        img2.src = data[Math.floor(Math.random() * (5000-2)+2)].url;
    }
}
loadRandomPhoto();
function loadRandomUSers(){
    fetch(API_PLACEHOLDER_USERS)
        .then(res => res.json())
        .then(data => getData(data))
        .catch(error => console.log(error))

    const getData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length; i++) {
            body+=`<tr><td>${data[i].name}</td><td>${data[i].email}</td></tr>`;
        }
        document.getElementById('data').innerHTML = body;
        console.log(body);
    }
}
loadRandomUSers()