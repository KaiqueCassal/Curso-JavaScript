let num = document.getElementById('fnum')
let lis = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lis.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('[ERRO] valor inválido ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior  = valores[0]
        let menor = valores[0]
        let soma = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        
        let media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números adicionados</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `A média é de ${media}</p>`
    }
}