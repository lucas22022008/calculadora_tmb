let res = document.querySelector("#res");

// Captura o evento 'keydown' (tecla pressionada) em todos os inputs
const inputs = document.querySelectorAll('input[type="number"]');
inputs.forEach((input, index) => {
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita o comportamento padrão de submit do formulário

            // Move o foco para o próximo input ou volta ao primeiro, se for o último
            const nextIndex = (index + 1) % inputs.length;
            inputs[nextIndex].focus();
        }
    });
});

// puxar as opções do select
document.getElementById("genero").addEventListener("change", function() {
    calcular();
});

// função que pode cancelar o cálculo no caso de inputs vazios
function cancelar() {
    event.preventDefault(calcular());
}

// escutar qual opção foi escolhida e realizar o cálculo
function calcular() {
    
    // descobrindo qual foi a opção escolhida
    var selectElement = document.getElementById("genero");
    var opcaoEscolhida = selectElement.value;

    // capturando os inputs
    let idade = document.querySelector("#idade");
    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");

    // capturando o Valor dos inputs
    peso = Number(peso.value);
    altura = Number(altura.value);
    idade = Number(idade.value);

    // realizando o cálculo se os inputs estiverem corretamente preenchidos
    if (!idade == "" | !peso == "" | !altura == "") {
        if (opcaoEscolhida === "Homem") {

        // Cálculo para o homem
        let calculo = 66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade);

        // mostrar o resultado
        res.innerHTML = `${calculo.toFixed(2)} calorias`;

        }else if (opcaoEscolhida === "Mulher") {

        // Cálculo para a mulher
        let calculo = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);

        // mostrar o resultado
        res.innerHTML = `${calculo.toFixed(2)} calorias`;
        }
    }else if (idade == "" | peso == "" | altura == "") {
        // alerta pedindo para preencher os cálculos
        alert("Por favor, preencha todos as perguntas para um cálculo preciso!");
        // chamando a função que cancela o cálculo
        cencelar();
    }
};