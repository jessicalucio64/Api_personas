const input = document.querySelector('#searchInput');
const userList = document.querySelector('#users');
let url =  "https://fakerapi.it/api/v1/persons?_quantity=10&_gender=male&_birthday_start=2005-01-01";
let users = [
]
document.addEventListener('DOMContentLoaded', async () =>{
    userList.innerHTML = `<h1>Cargando</h1> `
    const data = await loadUsers()
    users = data.data
    renderUsers(users)
});

input.addEventListener('keyup',e =>{
    const newUsers = users.filter(user =>`${user.firstname.toLowerCase()} ${user.lastname.toLowerCase()}`.includes(input.value.toLowerCase()));
    return renderUsers(newUsers)
});

async function loadUsers(){
    let respuesta = await fetch(url)
    return res = respuesta.json()
}

const createUsersItems = users=>users.map(user=>
    
    `<table border='1'  align='center' id='mitabla' >
                            <tr>
                        <td WIDTH="100px">${user.firstname}</td>
                        <td WIDTH="100px">${user.lastname}</td>
                        <td WIDTH="300px">${user.email}</td>
                        <td WIDTH="100px" >${user.phone}</td>
                        <td WIDTH="150px">${user.birthday}</td>
                        <td id='genero'WIDTH="150px" >${user.gender}</td>
                    </tr>
                </table >`)
      .join(''); 

function renderUsers(users){
    const itemsString = createUsersItems(users)
    userList.innerHTML = itemsString
}
function cambiaColor(){
    celda = document.getElementById('genero');
    if (celfa == 'male'){
        celda.style.color=document.blue;
    }
}