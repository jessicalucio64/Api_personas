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
       return `${user.firstname.toLowerCase()} ${user.phone.toLowerCase()} ${user.email.toLowerCase()} ${user.birthday.toLowerCase()} ${user.lastname.toLowerCase()} ${user.gender.toLowerCase()}`.includes(input.value.toLowerCase()) 
    })
    renderUsers(newUsers);
   
    // const newUsers = users.filter(user => `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()))
    // renderUsers(newUsers)
})

async function loadUsers() {
    let respuesta = await fetch(url);
    return res = respuesta.json();
}

const createUsersItems = users=>users.map(user=>{
    if(user.gender == 'male' || user.gender == 'hombre'){
        user.gender = 'hombre'
        return `
            <table>
                <tr class="genero1">
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.phone}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                    <td>${user.birthday}</td>
                </tr>
            </table>`
    }else{
        user.gender = 'mujer'
        return `
            <table>
                <tr class="genero2">
                    <td>${user.firstname}</td>
                    <td>${user.lastname}</td>
                    <td>${user.phone}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                    <td>${user.birthday}</td>
                </tr>
            </table>`
    }
}).join('');

function renderUsers(users) {
    const itemsString = createUsersItems(users);
    userList.innerHTML = itemsString;
}
