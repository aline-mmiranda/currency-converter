const moedas = document.querySelector("#moedas");
const inputValor = document.querySelector("#valor");
const button = document.querySelector("#button");
const resultado = document.querySelector(".resultado");
const valorReal = document.querySelector(".valor-real");
const bandeiraMoeda = document.querySelector(".bandeira-moeda");
const nomeMoeda = document.querySelector(".nome-moeda");
const valorMoeda = document.querySelector(".valor-moeda");

moedas.addEventListener("change", (e) => {
    moedaSelecionada = e.target.value;

    if (moedaSelecionada === "dolar") {
        bandeiraMoeda.src = "./assets/images/dolar.png";
        bandeiraMoeda.alt = "Bandeira Dólar";
        nomeMoeda.innerText = "Dólar Americano";
        valorMoeda.innerText = "US$ 0";
    } else if (moedaSelecionada === "euro") {
        bandeiraMoeda.src = "./assets/images/euro.png";
        bandeiraMoeda.alt = "Bandeira Euro";
        nomeMoeda.innerText = "Euro";
        valorMoeda.innerText = "€ 0";
    } else if (moedaSelecionada === "libra") {
        bandeiraMoeda.src = "./assets/images/libra.png";
        bandeiraMoeda.alt = "Bandeira Libra";
        nomeMoeda.innerText = "Libra";
        valorMoeda.innerText = "£ 0";
    } else {
        bandeiraMoeda.src = "./assets/images/bitcoin.png";
        bandeiraMoeda.alt = "Bandeira Bitcoin";
        nomeMoeda.innerText = "Bitcoin";
        valorMoeda.innerText = "₿ 0";
    }
});

inputValor.addEventListener("blur", (e) => {
    let valor = e.target.value.replace(/\./g, '').replace(',', '.');

    if (valor === "") return;

    valor = parseFloat(valor);

    if (isNaN(valor)) return;

    e.target.value = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(valor);
});

button.addEventListener("click", () => {
    const valor = inputValor.value.replace(/\./g, '').replace(',', '.');
    const valorDigitado = parseFloat(valor);

    if (!valor || isNaN(valorDigitado)) return;

    const dolar = valorDigitado / 5.22;
    const euro = valorDigitado / 6.00;
    const libra = valorDigitado / 6.95;
    const bitcoin = valorDigitado / 375283.96;
 
    const realFormatado = new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(valorDigitado);

    valorReal.innerText = `R$ ${realFormatado}`;

    const formatoMoeda = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    };

    if (moedas.value === "dolar") {
        const dolarFormatado = new Intl.NumberFormat("pt-BR", formatoMoeda).format(dolar);
        valorMoeda.innerText = `US$ ${dolarFormatado}`;
    } else if (moedas.value === "euro") {
        const euroFormatado = new Intl.NumberFormat("pt-BR", formatoMoeda).format(euro);
        valorMoeda.innerText = `€ ${euroFormatado}`;
    } else if (moedas.value === "libra") {
        const libraFormatado = new Intl.NumberFormat("pt-BR", formatoMoeda).format(libra);
        valorMoeda.innerText = `£ ${libraFormatado}`;
    } else if (moedas.value === "bitcoin") {
        const bitcoinFormatado = new Intl.NumberFormat("pt-BR", formatoMoeda).format(bitcoin);
        valorMoeda.innerText = `₿ ${bitcoinFormatado}`;
    }
});

