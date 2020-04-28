const inputmail = document.getElementById('email');
const inputsenha = document.getElementById('senha')
const tilt = document.getElementById('titulo');
const botao = document.getElementById('botao')


const usuarios = [{
        nome: 'Luann Portes',
        email: 'luann.futrica@gmail.com',
        senha: 'minhadatadeaniversario',
    },
    {
        nome: 'Hellom Olivera',
        email: 'hellom.futrica@gmail.com',
        senha: 'minhadatadeaniversario',
    },
    {
        nome: 'Gabriel Henrique',
        email: 'gabriel.futrica@gmail.com',
        senha: 'minhadatadeaniversario',
    },
];


botao.onclick = function() {
    let email = inputmail.value
    let senha = inputsenha.value
    let match = false;

    if (email.length == 0 || senha.length == 0) {
        alert('Mano, tem que escrever ai')
        return;
    }

    for (let pessoa of usuarios) {
        if (email === pessoa.email && senha === pessoa.senha) {
            alert(`Seja bem vindo, ${pessoa.nome}. COMUNISTA!`)
            match = true
        }
    }
    if (!match) {
        alert('Usuario não cadastrado');
    }
}

inputmail.onclick = function() {
    tilt.innerHTML = 'COMUNISTA!'
}

inputmail.onblur = function() {
    tilt.innerHTML = 'LOGIN'
}