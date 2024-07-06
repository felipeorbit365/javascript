function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

/*
    var formAno
    - Obtém o ano que veio do formulário, isto é, a caixa de texto com Ano de Nascimento

    var res
    - Seleciona a div a ser utilizada para exibição do resultado

    .value 
    - Obtém o VALOR na caixa de texto

    if (formAno.value.length == 0 || formAno.value > ano) 
    - Se o ano estiver vazio (já que analisa se o comprimento do valor é igual a 0), ou seja, sem resposta OU se a resposta do ano for maior que o ano atual

    var fsex = document.getElementsByName('radsex')
    - Obtém a resposta do radio button

    fsex[0].checked
    - Se apção de índice 0 nos radio buttons estiver selecionada
    - [0] é masculino

    fsex[1].checked
    - Se apção de índice 0 nos radio buttons estiver selecionada
    - [1] é feminino
    
    var img = document.createElement('img')
    - Criar imagens dinamicamente no JavaScript
    - Cria tag <img>

    img.setAttribute('id', 'foto')
    - Coloca um id="foto" na tag <img>
    - No HTML, é o equivalente a: <img id="foto"> 

    img.setAttribute('src', 'foto-bebe-m.jpg')
    - Adiciona a foto em si atráves do src

    res.appendChild(img)
    - Adiciona o elemento img abaixo, no caso, abaixo de "Detectamos..."
*/