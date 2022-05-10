const input = document.querySelector("#searchInput");
const userList = document.querySelector("#users");
let url = "https://fakerapi.it/api/v1/persons?_quantity=10";
let users = [];
document.addEventListener("DOMContentLoaded", async () => {
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
            // `<li class="bg-zinc-800 hover:bg-zinc-700 hover:cursor-pointer">
            
            // ${user.firstname} ${user.lastname} ${user.phone} ${user.email} ${user.gender} ${user.birthday} 
            // </li>`

            `<table>
                <tbody>
                    <tr>
                        <td>${user.firstname}</td>
                        <td>${user.lastname}</td>
                        <td>${user.phone}</td>
                        <td>${user.email}</td>
                        <td>`
                        
                        `</td>
                        <td>${user.birthday}</td>
                    </tr>
                </tbody>
            </table>`
        )
    .join(" ");

function renderUsers(users) {
    const itemsString = createUserItems(users);
    userList.innerHTML = itemsString;
}