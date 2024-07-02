// Módulo D - Aula 12
var agora = new Date()
var diaSemana = agora.getDay()

switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break        
    case 4:
        console.log('Quinta')
        break   
    case 5:
        console.log('Sexta')
        break   
    case 6:
        console.log('Sábado')
        break   
    default:
        console.log('[ERRO] Dia inválido!')
}

/* 
    Aula 12 – Condições (Parte 2)
----------------------------------

    O .getDay() não retorna o nome do dia da semana em si, como seria desejado, mas sim o índice correspondente. Por essa razão, o switch case é utilizado

    Uma vez que o índice seja indicado, o sistema substitui pelo nome do dia da semana correspondente

    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado

    Se o índice não estiver entre 0 e 6, o default trata o erro indicando que é um dia inválido
*/