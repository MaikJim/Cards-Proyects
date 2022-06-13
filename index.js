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
        const img3 = document.getElementById('img3');
        const img4 = document.getElementById('img4');
        img1.src = data[Math.floor(Math.random() * (5000-1)+1)].url;
        img2.src = data[Math.floor(Math.random() * (5000-2)+2)].url; 
        img3.src = data[Math.floor(Math.random() * (5000-1)+3)].url;
        img4.src = data[Math.floor(Math.random() * (5000-2)+4)].url; 
    }
}
async function loadRandomUSers(){
    const res = await fetch(API_PLACEHOLDER_USERS)
    const data = await res.json()

    if (res.status !== 200){
        spanError.innerHTML = `Error:${res.status}`;
    }else{
        data.forEach(element => {
            if (element.id === 1) {
                const name1 = document.getElementById('name1');
                const email1 = document.getElementById('email1');
                const Geo1 = document.getElementById('geo1');
                name1.innerHTML = `Name:${element.name}`;
                email1.innerHTML = `Email:${element.email}`;
                Geo1.innerHTML = `Geolocalitation: lat:${element.address.geo.lat} lng:${element.address.geo.lng}`;
            }if (element.id === 2) {
                const name2 = document.getElementById('name2');
                const email2 = document.getElementById('email2');
                const Geo2 = document.getElementById('geo2');
                name2.innerHTML = `Name:${element.name}`;
                email2.innerHTML = `Email:${element.email}`;
                Geo2.innerHTML = `Geolocalitation: lat:${element.address.geo.lat} lng:${element.address.geo.lng}`;
            }if (element.id === 3) {
                const name3 = document.getElementById('name3');
                const email3 = document.getElementById('email3');
                const Geo3 = document.getElementById('geo3');
                name3.innerHTML = `Name:${element.name}`;
                email3.innerHTML = `Email:${element.email}`;
                Geo3.innerHTML = `Geolocalitation: lat:${element.address.geo.lat} lng:${element.address.geo.lng}`;
            }if (element.id === 4) {
                const name4 = document.getElementById('name4');
                const email4 = document.getElementById('email4');
                const Geo4 = document.getElementById('geo4');
                name4.innerHTML = `Name:${element.name}`;
                email4.innerHTML = `Email:${element.email}`;
                Geo4.innerHTML = `Geolocalitation: lat:${element.address.geo.lat} lng:${element.address.geo.lng}`;
            }
        });
    }
    }
loadRandomPhoto();
loadRandomUSers();