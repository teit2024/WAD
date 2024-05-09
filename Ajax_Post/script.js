reg=document.getElementById('register')
reg.addEventListener("click",()=>{
    const uname = document.getElementById('u_name').value;
    const role = document.getElementById('u_role').value;
    const u_email = document.getElementById('u_email').value;
    const u_city = document.getElementById('u_city').value;
    const u_gender = document.getElementById('u_gender').value;
    

    let user={
        u_name:`${uname}`,
        u_role:`${role}`,
        u_email:`${u_email}`,
        u_city:`${u_city}`,
        u_gender:`${u_gender}`
    }

    let xhr = new XMLHttpRequest() 
    xhr.open("POST", "https://jsonplaceholder.typicode.com/users/",true) 
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8') 
    xhr.onload = () => { 
        if (xhr.status == 201) { 
            let existingArray = JSON.parse(localStorage.getItem('myArray')) || [];
            existingArray.push(user);
            localStorage.setItem('myArray', JSON.stringify(existingArray));
            alert("successful")
            display.style.display="block"
       }
    }
    xhr.send(JSON.stringify(user)) 

})