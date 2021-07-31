function createAccount(name,phone,user, pwd){
    const obj = {
        name:name,
        phone:phone,
        email : user,
        password : pwd
    };
    return obj;
}
const user = {
    name:'priyanka',
    phone:'123456789',
    email :'pri@gmail.com',
    password :'123'
};

if(localStorage.getItem('users') === null){
    localStorage.setItem('users', JSON.stringify(user));
}

function signup(){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;

    var retrievedObject = localStorage.getItem('users');
    console.log(retrievedObject);
    let users = JSON.parse(retrievedObject);
    
    if(users[email] == null){
        users[email] = createAccount(name,phone,email,pwd);
        localStorage.setItem('users', JSON.stringify(users));
        console.log(users);
        window.location.href = 'login.html';
    }
    else{
        let dup = document.getElementById('duplicate');
        dup.innerText = 'Email already exists..';
    } 
}

function authenticate(){
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    var retrievedObject = localStorage.getItem('users');
    let users = JSON.parse(retrievedObject);

    let obj = users[email];
    if(obj == null){
        let error = document.getElementById('error');
        error.innerText = 'Wrong username or password';
    }
    else if(email === obj.email && pwd === obj.password){
        window.parentPage = true;
        window.location.href = "cv.html";
    }
    else{
        document.getElementById('name').value ="";
        document.getElementById('phone').value="";
        document.getElementById('email').value ="";
        document.getElementById('pwd').value="";
    }
 
}

function reset(){
    
    const name = document.getElementById('name');
    const ph = document.getElementById('phone');
    if(name != null && ph != null){
        name.value = "";
        ph.value = "";
    }
    const email = document.getElementById('email').value = "";
    const pwd = document.getElementById('pwd').value = "";
}


