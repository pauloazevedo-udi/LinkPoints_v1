// script.js

document.getElementById('togglePassword')?.addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Exibir' : 'Ocultar';
});

// Lógica para o formulário de cadastro inicial
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password.length >= 6) {
        // Mostra a tela de carregamento antes de redirecionar
        document.body.innerHTML = `
            <div class="loading-screen">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Logotipo do LinkedIn">
                <div class="loader"></div>
            </div>
        `;

        setTimeout(() => {
            window.location.href = "nova-tela.html";
        }, 1000);
    } else {
        alert('Preencha os campos corretamente.');
    }
});

// Lógica para o formulário de nome e sobrenome
document.getElementById('nameForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    // Mostra a tela de carregamento antes de redirecionar
    document.body.innerHTML = `
        <div class="loading-screen">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Logotipo do LinkedIn">
            <div class="loader"></div>
        </div>
    `;

    setTimeout(() => {
        window.location.href = "profile.html";
    }, 1000);
});

// Lógica para o formulário de tipos de emprego
document.getElementById('jobForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    // Mostra a tela de carregamento antes de redirecionar
    document.body.innerHTML = `
        <div class="loading-screen">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Logotipo do LinkedIn">
            <div class="loader"></div>
        </div>
    `;

    setTimeout(() => {
        window.location.href = "linkpoints.html";
    }, 1000);
});

// Verificação adicional para evitar erros de redirecionamento residual
window.addEventListener('beforeunload', () => {
    sessionStorage.clear();
});



