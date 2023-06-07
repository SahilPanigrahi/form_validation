const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    validate();
})

const sendData = (usernameVal, sRate, count) => {
    if (sRate === count){
        alert('Registration Sucessful');
        location.href = `sucess.html?username = ${usernameVal}`;
    }
}

const sucessMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');

    var count = formCon.length - 1;
    for(var i = 0; i < formCon.length; i++){
        if (formCon[i].className === "form-control sucess"){
            var sRate = 0 + i;
            sendData(usernameVal, sRate, count);
        }else{
            return false;
        }
    }
}

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    if(usernameVal === ""){
        setErrorMsg(username, 'username can not be balnk');
    }else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'Username minimum 3 char');
    }else {
        setSucessMsg(username);
    }

    if(emailVal === ""){
        setErrorMsg(email, 'email can not be blank');
    }else if (emailVal.length <= 5) {
        setErrorMsg(email, 'Not a valid Email');
    }else {
        setSucessMsg(email);
    }

    if(phoneVal === ""){
        setErrorMsg(phone, 'Phone Number can not be blank');
    }else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid Phone Number');
    }else {
        setSucessMsg(phone);
    }

    if(passwordVal === ""){
        setErrorMsg(password, 'Password can not be blank');
    }else if (passwordVal.length <= 5) {
        setErrorMsg(password, 'Password minimum 6 char');
    } else if (!/\d/.test(passwordVal) || !/[a-z]/.test(passwordVal) || !/[A-Z]/.test(passwordVal)) {
        setErrorMsg(password, 'Password must contain at least one uppercase letter, one lowercase letter and one number');
    } else {
        setSucessMsg(password);
    }

    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm Password can not be blank');
    }else if (passwordVal != cpasswordVal) {
        setErrorMsg(cpassword, 'Password is not matching');
    }else {
        setSucessMsg(cpassword);
    }
    sucessMsg(usernameVal);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSucessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control sucess";
}

