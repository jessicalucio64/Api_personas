const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let url =  "https://fakerapi.it/api/v1/persons?_quantity=10";
let users = [
]
document.addEventListener('DOMContentLoaded', async () =>{
    userList.innerHTML = `<h1>Cargando</h1> `
    const data = await loadUsers()
    users = data.data
    renderUsers(users)
});

input.addEventListener('keyup',e =>{
    const newUsers = users.filter(user =>
        `${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()} 
        ${user.gender.toLowerCase()} ${user.email.toLowerCase()} 
        ${user.phone.toLowerCase()} ${user.birthday.toLowerCase()}`
        .includes(input.value.toLowerCase()));

    return renderUsers(newUsers)
});

async function loadUsers(){
    let respuesta = await fetch(url)
    return res = respuesta.json()
}

const createUsersItems = users=>users.map(user=>{
    if(user.gender == 'male' || user.gender=='hombre'){
        user.gender = 'hombre'
        return `
            <table border='1'  align='center' >
                    <tr class="genero1">
                        <td WIDTH="100px">${user.firstname}</td>
                        <td WIDTH="100px">${user.lastname}</td>
                        <td WIDTH="300px">${user.email}</td>
                        <td WIDTH="100px" >${user.phone}</td>
                        <td WIDTH="150px">${user.birthday}</td>
                        <td WIDTH="150px" >${user.gender}</td>
                    </tr>
                </table >`
    }else{
        user.gender= 'mujer'
        return `
            <table border='1'  align='center' >
                    <tr class="genero2">
                        <td WIDTH="100px">${user.firstname}</td>
                        <td WIDTH="100px">${user.lastname}</td>
                        <td WIDTH="300px">${user.email}</td>
                        <td WIDTH="100px" >${user.phone}</td>
                        <td WIDTH="150px">${user.birthday}</td>
                        <td  WIDTH="150px" >${user.gender}</td>
                    </tr>
                </table >`
    }
}).join('');
      
function renderUsers(users){
    const itemsString = createUsersItems(users)
    userList.innerHTML = itemsString
}