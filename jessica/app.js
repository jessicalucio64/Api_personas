const input = document.querySelector("#searchInput");
const userList = document.querySelector("#users");
let url = "https://fakerapi.it/api/v1/users?_quantity=1000";
let users = [];

document.addEventListener("DOMContentLoaded", async() => {
    userList.innerHTML = `<h1>Cargando</h1>`;
    const data = await loadUsers();
    users = data.data;
    renderUsers(users);
});

input.addEventListener('keyup', e => {
    const newUsers = users.filter(user => {
        return `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} `.includes(input.value.toLowerCase())
    })
    renderUsers(newUsers);



    // const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()))
    // renderUsers(newUsers)
})

async function loadUsers() {
    let respuesta = await fetch(url);
    return (res = respuesta.json());
}
const createUserItems = (users) =>
    users
    .map(
        (user) =>
        `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">
    ${user.firstname} ${user.lastname}
    </li>`
    )
    .join(" ");

function renderUsers(users) {
    const itemsString = createUserItems(users);
    userList.innerHTML = itemsString;
}