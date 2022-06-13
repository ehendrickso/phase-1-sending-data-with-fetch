const userData = { name: "Steve",
 email: "steve@steve.com",
}


function submitData() {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData)})
    .then(function (res) {
        return res.json();
    })
    .then(function (object) {
        document.body.append(object.id);
    })
    .catch(function (error) {
        alert("Unauthorized Access")
        document.body.append(error.message);
    })
};


submitData()



