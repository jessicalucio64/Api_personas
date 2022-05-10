const input = document.querySelector('#searchInput');
const userTable = document.querySelector('#usersTable');
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

async function loadUsers(){
    let respuesta = await fetch(url);
    return res = respuesta.json();
    //console.log(res);
}

// const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');

const createUserItems = users => users.map(user => {
    if(user.gender == "male"){
        return `
        <tr class="male">
            <td sytle="width: 150px;">${user.firstname}</td>
            <td sytle="width: 150px;">${user.lastname}</td>
            <td style="width: 246px;">${user.email}</td>
            <td style="width: 145px;">${user.phone}</td>
            <td style="width: 150px;">${user.birthday}</td>
            <td style="width: 145px;">Hombre</td>
        </tr>`;
    }else{
        return `
            <tr class="female">
                <td sytle="width: 150px;">${user.firstname}</td>
                <td sytle="width: 150px;">${user.lastname}</td>
                <td style="width: 246px;">${user.email}</td>
                <td style="width: 145px;">${user.phone}</td>
                <td style="width: 150px;">${user.birthday}</td>
                <td style="width: 145px;">Mujer</td>
            </tr>`; 
    }
}).join(' ');

function renderUsers(users) {
    const itemsTable= `
        <thead">
            <th sytle="width: 150px;">Nombre</th>
            <th sytle="width: 150px;">Apellido</th>
            <th style="width: 246px;">Email</th>
            <th style="width: 145px;">Teléfono</th>
            <th style="width: 150px;">Fecha de nacimiento</th>
            <th style="width: 145px;">Genero</th>
        </thead>
    `;

    const itemsString = createUserItems(users);

    userTable.innerHTML = itemsTable;
    userList.innerHTML = itemsString;
}