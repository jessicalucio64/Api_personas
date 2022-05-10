const input = document.querySelector('#searchInput');
const usercabecera = document.querySelector('#usercabecera');
const userList = document.querySelector('#users');
var encabezado = document.getElementById("encabezado1");
var tabla = document.getElementById("tab");
//encabezado.style.backgroundColor = "red";

let users = [];

let url = "https://fakerapi.it/api/v1/persons?_quantity=10";

document.addEventListener('DOMContentLoaded', async() => {

    userList.innerHTML = `<h1>Cargando...</h1>`;
    const data = await loadUsers();
    users = data.data;
    console.log(users.filter(user => user.gender === 'male'));


    renderUsers(users);
});


input.addEventListener('keyup', e => {


    const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} ${user.gender.toLowerCase()} `.includes(input.value.toLowerCase()));
    return renderUsers(newUsers)




});


async function loadUsers() {
    let respuesta = await fetch(url);
    return res = respuesta.json();

}

// const createUserItems = users => users.map(user => `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">${user.firstname} ${user.lastname}</li>`).join(' ');


const createUserItems = users => users.map(user => {
    if (user.gender == "male" || user.gender == "hombre") {
        user.gender = "hombre";
        return `<tr class="hombre">
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.gender}</td>
            </tr>`;
    } else {
        user.gender = "mujer";
        //tabla.style.backgroundColor = "black";
        return `<tr class="mujer">
            <td>${user.firstname}</td>
            <td>${user.lastname}</td>
            <td>${user.gender}</td>
            </tr>`;
    }
}).join(' ')

function renderUsers(users) {
    const itemsTable = `
        <thead>
            <th>FirstName</th>
            <th>LastName</th>
            <th>gender</th>
        </thead>
    `;

    const itemsString = createUserItems(users);

    usercabecera.innerHTML = itemsTable;
    userList.innerHTML = itemsString;
}

function color(parametro) {

}