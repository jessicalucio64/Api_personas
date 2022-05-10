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
    const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()));
    renderUsers(newUsers);
});

async function loadUsers(){
    let respuesta = await fetch(url);
    return res = respuesta.json();
    //console.log(res);
}

// const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');

const createUserItems = users => users.map(user => `
    <tr>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.gender}</td>
    </tr>
`).join(' ');

function renderUsers(users) {
    const itemsTable= `
        <thead>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Genero</th>
        </thead>
    `;

    const itemsString = createUserItems(users);

    userTable.innerHTML = itemsTable;
    userList.innerHTML = itemsString;
}