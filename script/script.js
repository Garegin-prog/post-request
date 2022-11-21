
function passwordReq(){
    
    if (!login.value || !password.value) {
        return
    }


    let data = {
        "login": login.value,
        "password": password.value
    }
    
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(req => req.json())
    .then(data => {})
  

} 

function deletePassword() {
    
  
    fetch(`http://localhost:3000/posts/${2}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
       
    })
    .then(req => req.json())
    .then(data => console.log(data))
}
