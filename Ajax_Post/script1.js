
let data = JSON.parse(localStorage.getItem('myArray'));

let tableBody = document.querySelector('.tbody');

data.forEach(item => {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.textContent = item.u_name;
    cell2.textContent = item.u_role;
    cell3.textContent = item.u_email;
    cell4.textContent = item.u_city;
    cell5.textContent = item.u_gender;
});