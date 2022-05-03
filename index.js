// Add your code here
const formData = {
    name: 'Steve',
    email: 'steve@steve.com'
}


const createPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        },
    body: JSON.stringify(formData)  
}

function submitData() {
    return fetch('http://localhost:3000/users', createPost)
    .then(resp => resp.json())
    .then(object => {
        const newID = object.id;
        const p = document.createElement('p');
        p.textContent = newID;
        const body = document.querySelector('body');
        body.append(p);
    })
    .catch(error => {
        const p = document.createElement('p');
        p.textContent = error.message;
        const body = document.querySelector('body');
        body.append(p);
    })
}