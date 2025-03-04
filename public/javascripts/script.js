document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const userData = {name, email, password};
    console.log(name , email, password);

    try {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });
        if (!response){
            const errorData = await response.json();
            throw new Error(errorData.error) || 'error';
        }
        const data = await response.json();
        console.log('User created! ', data);
        alert('Usuário cadastrado!');
    } catch(error){
        console.log('failed! ', error);
        alert('erro ao criar usuário');
    }
});

