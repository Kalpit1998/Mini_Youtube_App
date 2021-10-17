// =========================================================================
// Creating user account
// =========================================================================

function signUp(e){
    e.preventDefault();

    let form = document.getElementById("signup_form");

    if(form.exampleInputPassword1.value != form.exampleInputPassword2.value){
        form.exampleInputPassword2.style.borderColor = "red";
        alert("Password Mismatch");
        return;
    }

    let user_data = {

        name: form.exampleInputName.value,
        email: form.exampleInputEmail1.value,
        password: form.exampleInputPassword1.value,
        username: form.exampleInputUserName.value,
        mobile: form.exampleInputMobile.value,
        description:form.exampleInputDescription.value,
    };

    // console.log(user_data);

    user_data = JSON.stringify(user_data);

    // console.log(user_data);

    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method: 'POST',
        body: user_data,
        headers:{
            "Content-Type": 'application/json',
        }
    })
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        alert("Registration Succesfull!");
        window.location.href = "signin.html"
    })
    .catch((err)=>{
        console.log(err);
    })
}