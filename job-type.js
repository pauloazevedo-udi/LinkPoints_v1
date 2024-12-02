document.addEventListener('DOMContentLoaded', () => {
    const jobInput = document.getElementById('job');
    const locationInput = document.getElementById('location');
    const jobTagsContainer = document.getElementById('job-tags');
    const locationTagsContainer = document.getElementById('location-tags');
    const maxTags = 5; // Limite de 5 itens para cargos e localidades

    const addTag = (input, container) => {
        if (container.children.length >= maxTags) {
            alert(`Você pode adicionar no máximo ${maxTags} itens.`);
            return;
        }
        const value = input.value.trim();
        if (value === '') return;

        const tag = document.createElement('div');
        tag.classList.add('tag');
        tag.textContent = value;

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-tag');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            container.removeChild(tag);
        });

        tag.appendChild(removeButton);
        container.appendChild(tag);
        input.value = ''; // Limpa o campo
    };

    jobInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(jobInput, jobTagsContainer);
        }
    });

    locationInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(locationInput, locationTagsContainer);
        }
    });

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', () => {
        if (jobTagsContainer.children.length === 0 || locationTagsContainer.children.length === 0) {
            alert('Por favor, adicione pelo menos um cargo e uma localidade.');
            return;
        }
        window.location.href = 'next-step.html'; // Redireciona para a próxima etapa
    });
});


// Referências dos elementos
const jobInput = document.getElementById('job');
const jobTags = document.getElementById('job-tags');
const locationInput = document.getElementById('location');
const locationTags = document.getElementById('location-tags');
const submitButton = document.getElementById('submitButton');

// Adiciona o cargo à lista ao pressionar Enter
jobInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão de enviar o formulário
        const value = jobInput.value.trim();
        if (value) {
            addTag(jobTags, value);
            jobInput.value = ''; // Limpa o campo de entrada
            locationInput.focus(); // Move o foco para o campo de localidade
        }
    }
});

// Adiciona a localidade à lista ao pressionar Enter
locationInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const value = locationInput.value.trim();
        if (value) {
            addTag(locationTags, value);
            locationInput.value = ''; // Limpa o campo de entrada
        }
    }
});

// Função para criar e adicionar uma tag na lista
function addTag(container, value) {
    if (container.children.length < 5) { // Limita o número de tags a 5
        const tag = document.createElement('div');
        tag.className = 'tag';
        tag.textContent = value;

        // Botão de remoção
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => tag.remove());

        tag.appendChild(removeButton);
        container.appendChild(tag);
    } else {
        alert('Você só pode adicionar até 5 itens.');
    }
}

// Submissão do formulário
submitButton.addEventListener('click', () => {
    if (jobTags.children.length === 0 || locationTags.children.length === 0) {
        alert('Por favor, adicione pelo menos um cargo e uma localidade.');
    } else {
        // Redirecionar para outra tela ou enviar os dados
        window.location.href = 'next-step.html';
    }
});


