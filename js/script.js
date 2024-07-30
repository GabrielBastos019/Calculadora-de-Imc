
// Essa Função habilita a ajuda na tela ao clicar
function ativar() {
    var div_ativar = document.getElementsByClassName("div-sugestao-ativar")[0]
    var ativar = document.getElementsByClassName("sugestao-ativar")[0]
    var conteudo = document.getElementsByClassName("sugestao")[0]

    conteudo.style.display = "block"
    div_ativar.classList.add("estilo_div_ativar")
    ativar.style.display = "none"
}
// Essa Função desabilita a ajuda na tela ao clicar no X
function desativar() {
    var div_ativar = document.getElementsByClassName("div-sugestao-ativar")[0]
    var ativar = document.getElementsByClassName("sugestao-ativar")[0]
    var conteudo = document.getElementsByClassName("sugestao")[0]

    conteudo.style.display = "none"
    div_ativar.classList.remove("estilo_div_ativar")
    ativar.style.display = "block"
}
// Adiconando tecla enter
function enter(event) {
    var value = event.which

    if (value === 13) {
        puxar()
    } else {
        return
    }
}

//Puxando informações
function puxar() {
    var nome = document.getElementsByClassName("nome")[0]
    var altura = document.getElementsByClassName("altura")[0]
    var peso = document.getElementsByClassName("peso")[0]
    var msg = document.getElementsByClassName("texto")[0]
    var spans = document.getElementsByClassName("validacao")

    validacao(nome, altura, peso, msg, spans)

}
// mostrando imformações na tela
function show(imc, nome, msg) {

    if (nome.value == "") {
        nome.value = "Senhor(a)"
    }

    if (imc <= 16.99) {
        msg.innerHTML = nome.value + " seu imc é " + imc.toFixed(1) + " e você está muito Abaixo do peso"
    } else if (imc >= 17.0 && imc <= 18.49) {
        msg.innerHTML = nome.value + " seu imc é " + imc.toFixed(1) + " e você está  Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.99) {
        msg.innerHTML = nome.value + " seu imc é " + imc.toFixed(1) + " e você está com o Peso Normal"
    } else if (imc >= 25.0 && imc <= 29.99) {
        msg.innerHTML = nome.value + " seu imc é " + imc.toFixed(1) + " e você está Acima do Peso"
    } else if (imc >= 30.0 && imc <= 34.99) {
        msg.innerHTML = nome.value + " seu imc é " + imc.toFixed(1) + " e você está com Obesidade grau 1"
    } else if (imc >= 35.0 && imc <= 40.0) {
        msg.innerHTML = nome.value + " seu imc é " + imc.toFixed(1) + " e você está com Obesidade grau 2"
    } else if (imc >= 40) {
        msg.innerHTML = nome.value + " seu imc é " + imc.toFixed(1) + " e você está com Obesidade grau 3"
    }
}
//Função que valida os dados
function validacao(nome, altura, peso, msg, spans) {
    var imc = peso.value / (altura.value * altura.value)
    b
    if (altura.value == "" || altura.value < 0) {
        spans[0].classList.remove("display")
        altura.classList.add("negativo")
        altura.validity.valid = false
    } else {
        altura.classList.remove("negativo")
        spans[0].classList.add("display")
        altura.validity.valid = true
    }

    if (peso.value == "" || peso.value < 0) {
        spans[1].classList.remove("display")
        peso.classList.add("negativo")
        altura.validity.valid == false
    } else {
        spans[1].classList.add("display")
        peso.classList.remove("negativo")
        peso.validity.valid = true
    }
    // Se a condição for verdaderia, ira chamar a função Show()
    if (peso.validity.valid == true && peso.validity.valid == true) {
        show(imc, nome, msg)
    }
}
