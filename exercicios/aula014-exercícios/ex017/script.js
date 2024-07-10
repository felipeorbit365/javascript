function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

/*

    Criando elementos em JavaScript
    - document.createElement()

    Criando opções para o select de forma dinâmica
    - document.createElement('option')
    - Cria elemento option dentro do select
    - É o equivalente a fazer no HTML: <option value=""></option>
    
    item.text
    - A parte de dentro do option
    - No exemplo do exercício: o número do usuário é selecionado para definir a tabuada, então, o contador vai de 1 a 10, como na tabuada. Assim, são realizadas as operações fazendo a multiplicação do número pelo contador

    .appendChild()
    - Adiciona um elemento-filho
    - No exemplo do exercício: tab.appendChild(item) adiciona item como elemento-filho da tabela, possibilitando que seja mostrado

    c++
    - A incrementação adiciona 1 ao valor já existente da variável

    tab.innerHTML = ''
    - Antes de começar a mostrar a tabuada, limpa a área da tabuada
    - Isso possibilita com que várias tabuadas possam ser calculadas variás vezes sem que os valores das anteriores fiquem aparecendo o tempo todo, isso limpa a tabela

    item.value = `tab${c}`
    - Dá valor ao número da tabuada de acordo com o contador (1 a 10)
    - Indica o item de seleção
*/