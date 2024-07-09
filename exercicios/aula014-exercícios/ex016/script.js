// Módulo E - Exercício de JavaScript (Parte 5)
function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerarei PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c= i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

/*
    Exercício de JavaScript - Parte 5
-------------------------------------

    .value
    - O .value é utilizado para obter o valor que o usuário insere no campo de entrada (input)
    - Mesmo que ele sempre retorne uma string, ele é necessário para capturar esse valor
    - O .value é a propriedade que contém o valor atual do campo de entrada, independentemente do tipo de dado

    .value - Utilização em strings 
    - Mesmo se fosse uma palavra e não um número, de modo com que o conteúdo do input seja texto (string), ainda seria necessário usar .value para obter o valor (conteúdo) inserido pelo usuário


    .value - Momentos para utilizar
    - Independentemente do tipo de dado no campo de entrada (número, texto, etc.), o .value é usado para obter o valor
    - Usar .value é a forma consistente de obter o valor de qualquer campo de entrada em HTML.
    - Sempre que você for necessário obter e manipular o valor de um campo de entrada, o .value é utilizado independentemente do tipo de dado que o usuário insere

    .value - HTMLInputElement
    - Utilizar .value resolve o erro que aparece HTMLInputElement, já que sem ele estaria atribuindo o elemento HTML completo à variável, não o valor contido no campo de entrada.

---

    Convertendo em número
    - No exercício, são criadas novas variáveis para armazenar os valores do conteúdo da caixa de texto como número e não string. Isso pode ser feito com as variáveis que já estavam sendo utilizadas, por exemplo:

        let ini = Number(ini.value)
        let fim = Number(fim.value)
        let passo = Number(passo.value)

    - Isso faz com que as variáveis já existentes armazenem o valor em número, sem criar outras
    - ATENÇÃO: isso só deve ser feito quando a variável foi ESTRITAMENTE utilizada como número somente, já que converte o valor da caixa de texto em Number. Se ainda houvesse interesse em utilizar o conteúdo da caixa como String, nesse caso não seria possível, já que já converteu para número no lugar de criar outra variável somente com essa finalidade

---

    Adicionando mais elementos ao .innerHTML
    - Para colocar mais coisas no .innerHTML que está sendo utilizado no momento, deve somar o novo conteúdo ao conteúdo já existente: +=
    - Exemplo: res.innerHTML += `Conteúdo que você irá adicionar ao seu res.innerHTML já existente`
*/