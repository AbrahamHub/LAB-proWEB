document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const errorContainer = document.getElementById('error-container');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (response.ok) {
                // Redirigir a la página principal o realizar otras acciones necesarias
                window.location.href = 'index.html';
            } else {
                showError(result.message);
            }
        } catch (error) {
            showError('Error al intentar iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
        }
    });

    function showError(message) {
        if (errorContainer) {
            errorContainer.innerHTML = `<div class="alert alert-danger" role="alert">${message}</div>`;
        } else {
            console.error('El contenedor de errores no ha sido encontrado en el DOM.');
        }
    }
});
