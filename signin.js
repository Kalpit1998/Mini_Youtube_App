function signIn(e){

    e.preventDefault();

    let form = document.getElementById("signin_form");

    let user_data = {
        username: form.userName.value,
        password:form.userPassword.value,
    }

    // console.log(user_data);

    let data_to_send = JSON.stringify(user_data);

    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {

        method:'POST',

        body: data_to_send,

        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) =>{
        return res.json();
    })
    .then((res) =>{
        // console.log(res);

        fetchmyData(user_data.username,res.token)
    })
    .catch((err) =>{
        console.log(err);
    })
}

function fetchmyData(username, token){

    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {

            headers: {
                "Content-Type": "application/json",

                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((res) =>{
            // console.log("res", res);
            window.location.href = "index.html";
            alert("Logged In Successfully")
        })
        .catch((err) =>{
            console.log("err", err);
        })
}