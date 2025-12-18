document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = { name, email, password };
    console.log(name, email, password);

    try {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Erro ao criar usuário');
        }

        const data = await response.json();
        console.log('User created! ', data);
        alert('Usuário cadastrado!');
    } catch (error) {
        console.error('Failed! ', error);
        alert(error.message || 'Erro ao criar usuário');
    }
});