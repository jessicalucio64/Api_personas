const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let users = [];

let url = "https://fakerapi.it/api/v1/persons?_quantity=10";

document.addEventListener('DOMContentLoaded', async () => {
    userList.innerHTML = `<h1>Cargando...</h1>`;
    const data = await loadUsers();
    users = data.data;
    // console.log(users);
    renderUsers(users);
});

input.addEventListener('keyup', e => {
    const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} ${user.email.toLowerCase()} ${user.phone.toLowerCase()} ${user.birthday.toLowerCase()}${user.gender.toLowerCase()}`.includes(input.value.toLowerCase()));
    renderUsers(newUsers);
});

/* Otra manera de buscar por genero */

// input.addEventListener('keyup', e => {
//     const newUsers = users.filter(user => {
//         if(input.value.toLowerCase() == 'Mujer'.toLowerCase()){
//             while(user.gender == "female"){
//                 return `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} ${user.email.toLowerCase()} ${user.phone.toLowerCase()} ${user.birthday.toLowerCase()}${user.gender.toLowerCase()}`;
//             }   
//         }

//         if(input.value.toLowerCase() == 'Hombre'.toLowerCase()){
//             while(user.gender == "male"){
//                 return `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} ${user.email.toLowerCase()} ${user.phone.toLowerCase()} ${user.birthday.toLowerCase()}${user.gender.toLowerCase()}`;
//             }
//         } 
        
//         return `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} ${user.email.toLowerCase()} ${user.phone.toLowerCase()} ${user.birthday.toLowerCase()}${user.gender.toLowerCase()}`.includes(input.value.toLowerCase());  
//     });
//     renderUsers(newUsers);
// });

async function loadUsers(){
    let respuesta = await fetch(url);
    return res = respuesta.json();
    //console.log(res);
}

// const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');

const createUserItems = users => users.map(user => {
    if(user.gender == "male" || user.gender == "Hombre"){
        user.gender = "Hombre";
        return `
        <tr class="male">
            <td sytle="width: 150px;">${user.firstname}</td>
            <td sytle="width: 150px;">${user.lastname}</td>
            <td style="width: 246px;">${user.email}</td>
            <td style="width: 145px;">${user.phone}</td>
            <td style="width: 150px;">${user.birthday}</td>
            <td style="width: 145px;">${user.gender}</td>
        </tr>`;
    }else{
        user.gender = "Mujer";
        return `
            <tr class="female">
                <td sytle="width: 150px;">${user.firstname}</td>
                <td sytle="width: 150px;">${user.lastname}</td>
                <td style="width: 246px;">${user.email}</td>
                <td style="width: 145px;">${user.phone}</td>
                <td style="width: 150px;">${user.birthday}</td>
                <td style="width: 145px;">${user.gender}</td>
            </tr>`; 
    }
}).join(' ');

function renderUsers(users) {
    const itemsString = createUserItems(users);
    userList.innerHTML = itemsString;
}