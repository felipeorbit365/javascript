function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
}

/*
    function carregar()
    - Essa função é responsável por obter a hora através do sistema e exibir a imagem de acordo com o horário
    - A imagem é carregada através do objeto var img, associoado ao id de imagem

    var img = window.document.getElementById('imagem')
    - O objeto img tem relação com a foto de id "imagem" no HTML, fazendo a substituição de acordo
    - O Guanabara não funcionou, mas acredito a imagem de id "imagem" na div de id "foto" atua como se fosse um placeholder

    document.body.style.background 
    - Altera o fundo, acessando através do background no style
*/


