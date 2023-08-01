let res = document.querySelector("#res");

// puxar as opções do select
document.getElementById("genero").addEventListener("change", function() {
    calcular();
});

// escutar qual opção foi escolhida e realizar o cálculo
function calcular() {

    var selectElement = document.getElementById("genero");
    var opcaoEscolhida = selectElement.value;
   
    // realizar o cálculo específico para a opção escolhida
    if (opcaoEscolhida === "Homem") {
        // puxando os dados
        let idade = document.querySelector("#idade");
        let peso = document.querySelector("#peso");
        let altura = document.querySelector("#altura");

        peso = Number(peso.value);
        altura = Number(altura.value);
        idade = Number(idade.value);

        // Cálculo para o homem
        let calculo = 66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade);
        res.innerHTML = `${calculo.toFixed(2)} calorias`;

        // resetando os inputs
        peso.content = "";
    } else if (opcaoEscolhida === "Mulher") {
        // puxando os dados
        let idade = document.querySelector("#idade");
        let peso = document.querySelector("#peso");
        let altura = document.querySelector("#altura");

        peso = Number(peso.value);
        altura = Number(altura.value);
        idade = Number(idade.value);

        // Cálculo para a mulher
        let calculo = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
        res.innerHTML = `${calculo.toFixed(2)} calorias`;

        // resetando os inputs
        peso.value.content = "";
    };
};